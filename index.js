require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// initial
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/build"));
app.use(morgan("dev"));
app.use(cors());

// db
const db = require("./config/db");
db.mongoConnect();

// routes and middleware
const middleware = require("./middleware");
const routes = require("./routes.js");
routes(app);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use(middleware.notFund);
app.use(middleware.errorHandle);

// serve
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
