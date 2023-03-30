import axios from "axios";
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} style={{ width: "30%", marginBottom: "20px" }}>
        <div>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
};

export default PostList;
