const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "a@GzkrA1oB*J1J8eN";

const signUp = async (req, res) => {
  try {
    const { first_name, email, password, role } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = newUser({
      first_name,
      email,
      password_digest,
      role,
    });
    await user.save();
    const payload = {
      first_name: user.first_name,
      email: user.email,
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
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
  signUp,
  signIn,
  verify,
  changePassword,
};
