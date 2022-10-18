const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');


// create posts 
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get other posts
router.get("/", (req, res) => {
  Post.findAll({
          attributes: ["id", "content", "title", "created_at"],
          order: [
              ["created_at", "DESC"]
          ],
          include: [{
                  model: User,
                  attributes: ["username"],
              },
              {
                  model: Comment,
                  attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                  include: {
                      model: User,
                      attributes: ["username"],
                  },
              },
          ],
      })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

// update post 
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete post 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
