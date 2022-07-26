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
  getFeed: async (req, res) => {
    try {
      // retieve all the posts in the db
      const bookmarks = await Bookmark.find().sort({ createdAt: "desc" }).lean();
      const users = await User.find();
      // render the template and pass in the all posts data
      res.render("feed.ejs", { bookmarks: bookmarks, user: req.user, users: users });
      console.log(users)
    } catch (err) {
      console.log(err);
    }
  },
  getBookmark: async (req, res) => {
    try {
      // retrieve specific post in db based on the post id
      const bookmark = await Bookmark.findById(req.params.id);
      // retrieve comments tied to the specific post
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();

      res.render("post.ejs", { bookmark: bookmark, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  getNewPost: async (req, res) => {
    try {
      res.render("new_post.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
