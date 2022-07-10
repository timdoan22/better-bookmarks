const cloudinary = require("../middleware/cloudinary");
const Bookmark = require("../models/Bookmark");
const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      // retrieve all the posts belonging to the user
      const bookmarks = await Bookmark.find({ user: req.user.id });
      // render to profile.ejs and pass in the post and user data
      res.render("profile.ejs", { bookmarks: bookmarks, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
