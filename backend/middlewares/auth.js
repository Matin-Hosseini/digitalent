const jwt = require("jsonwebtoken");

const usersModel = require("./../models/user");

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization")?.split(" ");

  if (authHeader?.length !== 2) {
    res.status(403).json({ message: "You don't have access to this route" });
  }

  const token = authHeader[1];

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await usersModel.findById(jwtPayload.id).lean();

    Reflect.deleteProperty(user, "password");

    req.user = user;

    next()
  } catch (error) {
    return res.json(error);
  }
};
