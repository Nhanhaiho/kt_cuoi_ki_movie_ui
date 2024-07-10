const User = require("../models/user");
const jwt = require("jsonwebtoken");
// cai nay e chep tu bai cu qua
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });
};

exports.logout = (req, res) => {
  res.json({ message: "Logout successful" });
};
