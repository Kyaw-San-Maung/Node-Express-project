const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please fill user name!"],
  },
  email: {
    type: String,
    required: [true, "Please fill the email address"],
    unique: [true, "Email address alread taken"],
  },
  password: {
    type: String,
    required: [true, "please fill the correct password"],
  },
});

module.exports = mongoose.model("User", userSchema);
