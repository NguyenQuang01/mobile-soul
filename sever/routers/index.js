const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const User = require("../model/index");
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//regi
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "thieu name or pass" });
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ success: false, message: "alo alo" });
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    //retun token
    // const accessToken = jwt.sign(
    //   { userId: newUser._id },
    //   "" + process.env.JWT_KEY
    // );
    res.json({
      success: true,
      message: "User created successfully",
      // accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//login

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "thieu name or pass" });
  }
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "sai tai khoan va mat khau" });

    // Username found

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "sai tai khoan va mat khau" });
    }

    // All good
    // Return token
    // const accessToken = jwt.sign(
    //   { userId: user._id, username: user.username },
    //   "" + process.env.JWT_KEY
    // );

    res.json({
      success: true,
      message: "dang nhap thanh cong",
      // accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
