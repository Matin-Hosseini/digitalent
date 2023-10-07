const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  name: { type: "string", min: 3, max: 255 },
  userName: { type: "string", min: 3, max: 100 },
  email: { type: "email", min: 10, max: 100 },
  phone: { type: "string" },
  password: { type: "string", min: 8 },
  confirmPassword: { type: "equal", field: "password", min: 8 },
  $$strict: true,
};

const check = v.compile(schema);

module.exports = check;
