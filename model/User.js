const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleID: String
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
