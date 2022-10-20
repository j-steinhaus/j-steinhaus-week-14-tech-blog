//accessing models
const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');


// create a comment 
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get comments 
router.get("/", (req, res) => {
  Comment.findAll()
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;
