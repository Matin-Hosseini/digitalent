const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  email: { type: "email" },
};

const check = v.compile(schema)

module.exports = check