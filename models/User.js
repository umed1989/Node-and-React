const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
