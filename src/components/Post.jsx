import React from "react";
import { usePostContext } from "../context/PostContext";
import { MdDeleteOutline } from "react-icons/md";
const Post = ({ post }) => {
  const { handleClick } = usePostContext();
  return (
    <article className="post">
      <p style={{ color: post.color, fontSize: post.size }}>{post.text}</p>
      <MdDeleteOutline className="bin" onClick={() => handleClick(post.id)} />
    </article>
  );
};

export default Post;
