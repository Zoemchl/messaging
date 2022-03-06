const User = require("../models/User");

exports.registerNewUser = async (req, res) => {};
exports.loginUser = async (req, res) => {};
exports.getUserDetails = async (req, res) => {
    await res.json(req.userData);
  };
  

exports.registerNewUser = async (req, res) => {
    try {
     console.log(isUser);
      if (isUser.length >= 1) {
        return res.status(409).json({
          message: "email already in use"
        });
      }
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      let data = await user.save();
      const token = await user.generateAuthToken();
      res.status(201).json({ data, token });
    } catch (err) {
      res.status(400).json({ err: err });
    }
  };

exports.getAllUser = (req,res,next) => {
    console.log('get all users')
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({error}));
}