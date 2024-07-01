const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hashing password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  const user = await User.create({ username, email, password: hashPassword });
  console.log("User created", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not  valid");
  }
  res.json({ message: "User registered!" });
});

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const loginUser = expressAsyncHandler(async (req, res) => {
  // const { email, password } = req.body;

  // if (!email || !password) {
  //   res.status(400);
  //   throw new Error("All fields are mandatory!");
  // }
  // const user = await User.findOne({ email });

  // //compare password with hashedpassword
  // if (user && (await bcrypt.compare(password, user.password))) {
  //   const accessToken = jwt.sign(
  //     {
  //       user: {
  //         username: user.username,
  //         email: user.email,
  //         id: user.id,
  //       },
  //     },
  //     process.env.ACCESS_TOKEN_SECRET,
  //     { expiresIn: "1m" }
  //   );
  //   res.status(200).json({ accessToken });
  // } else {
  //   res.status(401);
  //   throw new Error("email or password is not valid!");
  // }
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All field is mandatory!");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is unvalid!");
  }
  res.json({ message: "User Login!" });
});

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const currentUser = expressAsyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
