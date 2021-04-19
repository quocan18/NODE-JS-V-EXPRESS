// File chính
const express = require("express");
const app = express();
const mongoose = require(mongoose);
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// Import routes(Middleware)
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are here");
});

app.get("/posts", (req, res) => {
  res.send("We are here ok");
});

// Connect to the database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected")
);

// Start a connection to the server
app.listen(3000);
