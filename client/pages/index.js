import PostCreate from "../components/post/PostCreate";
import PostList from "../components/post/PostList";

export default function Home() {
  return (
    <div>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}
