const contactsModel = require("./../../models/contacts");

exports.send = async (req, res) => {
  const newMessage = await contactsModel.create(req.body);
  res.status(200).json({ status: "new message created", message: newMessage });
};

exports.getAll = async (req, res) => {
  const messages = await contactsModel.find().select("-__v");
  res.status(200).json(messages);
};
