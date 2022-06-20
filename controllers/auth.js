const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");


// passport method to validate login
exports.getLogin = (req, res) => {
  if (req.user) {
    // redirect user to the profile route if they are authenticated
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login",
  });
};

