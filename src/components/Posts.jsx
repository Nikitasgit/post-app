import React from "react";
import { usePostContext } from "../context/PostContext";
import Post from "./Post";

const Posts = () => {
  const { state } = usePostContext();

  return (
    <section className="thread">
      {state.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
