import React from "react";
import { fetchPosts } from "../api/index.js";
import { useEffect, UseState } from "react";
import { useState } from "react/cjs/react.production.min";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      const newPosts = result.data.posts;
      setPosts(newPosts);
    };
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post, i) => {
        return;
      })}
    </div>
  );
};
export default Posts;
