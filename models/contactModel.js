const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please add contact name"],
    },
    email: {
      type: String,
      require: [true, "please add email"],
    },
    phone: {
      type: String,
      require: [true, "please add contact number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema)
