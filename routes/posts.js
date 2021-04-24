const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
// Routes
// async/await là một cơ chế giúp bạn thực hiện
//các thao tác bất đồng bộ một cách tuần tự hơn
// async: làm ra một function trả về một promise
// await: làm ra một function đợi một promise

// Get all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit the post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// JS Promise: bao gồm producing code và gọi đến consuming code
let my_promise = new Promise(function (my_resolve, my_reject) {
  // Producing code
  my_resolve(); // Thành công
  my_reject(); // Lỗi
});

// Consuming code
my_promise.then(
  function (value) {
    // code successful
  },
  function (error) {
    // code failed
  }
);

//### Promise example
const my_promise = new Promise(function (my_resolve, my_reject) {
  const req = new XMLHttpRequest();
  req.open("GET", "my_car.html");
  req.onload = function (params) {
    if (req.status == 200) {
      my_resolve(req.response);
    } else {
      my_reject("Không tìm thấy file");
    }
  };
  req.send();
});

my_promise.then(
  function (value) {
    {
      value;
    }
  },
  function (error) {
    {
      error;
    }
  }
);

// async, await và promise
async function get_file() {
  let my_promise = new Promise(function (my_resolve, my_reject) {
    let req = new XMLHttpRequest();
    req.open("GET", "my_car.html");
    req.onload = function () {
      if (req.status == 200) {
        my_resolve(req.response);
      } else {
        my_resolve("File error");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await my_promise;
}
get_file();
module.exports = router;
