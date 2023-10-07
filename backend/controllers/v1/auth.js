const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerValidator = require("./../../validators/register");

exports.register = async (req, res) => {
  const validationResult = registerValidator(req.body);
  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }

  const { name, userName, email, phone, password } = req.body;

  const isUserExist = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (isUserExist) {
    return res.status(409).json({
      message: "user name or email is used before",
    });
  }

  const countOfUsers = await userModel.count();

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await userModel.create({
    name,
    userName,
    email,
    phone,
    password: hashedPassword,
    role: countOfUsers > 0 ? "USER" : "ADMIN",
  });

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 day",
  });

  return res.status(201).json({ user, accessToken });
};
exports.login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ userName: identifier }, { email: identifier }],
  });

  if (!user) {
    return res.status(401).json({
      message: "username or email is not correct",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(405).json({
      message: "Password in incorrect",
    });
  }

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.status(201).json({ accessToken });
};
exports.getMe = async (req, res) => {
  const authHeader = req.header("authorization");

  if (!authHeader) {
    return res.json({ message: "token is required" });
  }

  const token = authHeader.split(" ")[1];
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById(verifiedToken.id, "-__v").lean();
  Reflect.deleteProperty(user, "password");

  res.json(user);
};
