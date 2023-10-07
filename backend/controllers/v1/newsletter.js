const newsletterModel = require("./../../models/newsletter");
const newsletterValidator = require("./../../validators/newsletter");

exports.add = async (req, res) => {
  const { email } = req.body;

  const validationResult = newsletterValidator(req.body);

  if (validationResult !== true) {
    return res.status(422).send(validationResult);
  }

  const newEmail = await newsletterModel.create({ email });
  res.status(200).send(newEmail);
};
