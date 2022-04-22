
module.exports = {
  // function checks to see if user is authenticated
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      // proceed to the next step
      return next();
      // if user is not authenticated, force them to go back to the home route
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
