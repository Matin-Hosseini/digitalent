module.exports = async (req, res, next) => {
  const isAdmin = req.user.role === "ADMIN";
  if (!isAdmin) {
    return res.staus(403).json({ message: "This route is only for admins" });
  }

  return next();
};
