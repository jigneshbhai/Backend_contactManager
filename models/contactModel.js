const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
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
