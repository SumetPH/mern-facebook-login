const router = require("express").Router();
const User = require("../model/User");

router.post("/", async (req, res, next) => {
  try {
    const oldUser = await User.findOne({ userId: req.body.userId });
    if (!oldUser) {
      const newUser = await User.create({
        userId: req.body.userId,
        userName: req.body.userName,
        token: req.body.token,
      });
      return res.json(newUser);
    }
    return res.json(oldUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
