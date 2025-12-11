const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const locale = require("./middleware/locale");
const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const orderRoutes = require("./routes/order");

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(locale);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    })
  })
);

app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/order", orderRoutes);

app.listen(3000, () => console.log("Roda Bar running on port 3000"));
