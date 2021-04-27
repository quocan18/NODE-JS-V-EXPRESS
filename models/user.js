const mongoose = require("mongoose");
// Tạo model
const UserModel = mongoose.model("user", {
  user_id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user_gender: {
    type: Date,
    default: Date.now,
  },
  user_phone_number: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserModel);
