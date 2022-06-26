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
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    // otherwise redirect the user back to the /login route
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    // proceed to the errors if login was not successful
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // flash message if the signup/login is successful 
      // redirect the user to the profile route
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);


  // sign up check
exports.getSignup = (req, res) => {
  // if the user already has an account redirect them back to the /profile route
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account",
  });
  };

// schema model for the user document to save into the database
const user = new User({
  userName: req.body.userName,
  email: req.body.email,
  password: req.body.password,
});
};