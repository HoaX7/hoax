require("dotenv").config({ path: __dirname + "/../.env"});
const express = require("express"),
  next = require("next"),
  dev = process.env.NODE_ENV != "production",
  cookieParser = require("cookie-parser"),
  { parse } = require("url"),
  mongoose = require("mongoose"),
  app = next({
    dev,
  }),
  handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    var server = express();
    server.use(cookieParser());
    server.use(express.json());
    const db = require("../public/static/js/datastore").mongoURI;
    mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => console.log("connected"))
        .catch(err => console.log(err));
    require("../api/routes/routes").routes(server);
    server.get("/", (req, res) => {
        res.redirect("home");
    });
    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    const port = process.env.port || 3000

    server.listen(port, () => {
      console.log("> Ready on port ", port);
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
