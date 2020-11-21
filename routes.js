const middleware = require("./middleware");
const user = require("./api/user");
const test = require("./api/test");

module.exports = (app) => {
  app.use("/api/users", user);
  app.use("/api/test", middleware.isAuth, test);
};
