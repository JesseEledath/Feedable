const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "a@GzkrA1oB*J1J8eN";

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (users) {
      return res.json(users)
    }
    res.status(404).json({ message: 'Product not found' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const signUp = async (req, res) => {
  try {
    const { full_name, email, password, role } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      full_name,
      email,
      password_digest,
      role,
    });

    await user.save();

    const payload = {
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      _id: user._id
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        email: user.email,
        full_name: user.full_name,
        role: user.role,
        _id: user._id
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {};

module.exports = {
  getUsers,
  signUp,
  signIn,
  verify,
  changePassword,
};
