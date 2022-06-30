const express = require("express");
const router = express.Router();
const bookmarksController = require("../controllers/bookmarks");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, bookmarksController.getBookmark);


module.exports = router;