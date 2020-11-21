const router = require("express").Router();
const User = require("../model/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
