const express = require("express");
const bodyParses = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParses.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    const post = posts[postId];

    post.comments.push({ id, content });
  }

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }
  res.send({});
});

app.listen(4002, () => {
  console.log("Listening in port 4002");
});
