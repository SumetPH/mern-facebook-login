const User = require("./model/User");

const isAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json("Unauthorized");
  } else {
    if (await User.findOne({ userId: req.headers.authorization })) {
      next();
    } else {
      return res.status(401).json("Unauthorized");
    }
  }
};

const notFund = (req, res, next) => {
  res.status(404);
  const err = new Error(`🔍 Not fond - ${req.originalUrl}`);
  next(err);
};

const errorHandle = (err, req, res, next) => {
  // console.log(err.message);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🎂" : err.stack,
  });
};

module.exports = {
  isAuth,
  notFund,
  errorHandle,
};
