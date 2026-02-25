const fs = require("fs");
const path = require("path");
const User = require("../models/User");

// ✅ Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, avatar, companyName, companyDescription, companyLogo, resume } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Common fields
    if (name) user.name = name;
    if (avatar) user.avatar = avatar;
    if (resume) user.resume = resume;

    // Employer-only fields
    if (user.role === "employer") {
      if (companyName) user.companyName = companyName;
      if (companyDescription) user.companyDescription = companyDescription;
      if (companyLogo) user.companyLogo = companyLogo;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        role: user.role,
        companyName: user.companyName,
        companyDescription: user.companyDescription,
        companyLogo: user.companyLogo,
        resume: user.resume || "",
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Delete resume (Jobseeker only)
exports.deleteResume = async (req, res) => {
  try {
    const { resumeUrl } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    if (user.role !== "jobseeker")
      return res.status(403).json({ success: false, message: "Only jobseekers can delete resume" });

    const fileName = resumeUrl?.split("/")?.pop();
    const filePath = path.join(__dirname, "../uploads", fileName);

    if (fileName && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    user.resume = "";
    await user.save();

    res.status(200).json({ success: true, message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Get public user profile
exports.getPublicProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
