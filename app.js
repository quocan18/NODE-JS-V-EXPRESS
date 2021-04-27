// File chính
const express = require("express");
const app = express();
const mongoose = require(mongoose);
const BodyParser = require("body-parser");

// Middleware
// app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// // Import routes(Middleware)
// const postsRoute = require("./routes/posts");
// app.use("/posts", postsRoute);

// // Routes
// app.get("/", (req, res) => {
//   res.send("We are here");
// });

// app.get("/posts", (req, res) => {
//   res.send("We are here ok");
// });

// // Connect to the database
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//   console.log("Connected")
// );

// Define REST API
app.post("/models/user.js", async (req, res) => {});
app.get("/models/user.js", async (req, res) => {});
// Start a connection to the server
app.listen(4000);
