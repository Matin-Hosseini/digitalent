const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const newsletterModel = mongoose.model("newsletter", schema);

module.exports = newsletterModel;
