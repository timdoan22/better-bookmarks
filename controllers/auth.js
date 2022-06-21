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

exports.postLogin = (req, res, next) => {
  // validation to check for valid email and password
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });
  // flash the error messages for incorrect email and password
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });
}