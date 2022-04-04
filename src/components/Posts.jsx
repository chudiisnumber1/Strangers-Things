import React, { useEffect, useState } from "react";
import { fetchPosts, createPost } from "../api/index.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState("");
  const [deliv, setDeliv] = useState(true);
  const [loc, setLoc] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    getPosts();
  }, []);
  async function newPost() {
    console.log({ title, descr, price, deliv, loc });
    try {
      const Post = await createPost(title, descr, price, deliv, loc);
      console.log("here is the sign up", Post);
      setPosts([...posts, Post]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await newPost();
          setTitle("");
          setDescr("");
          setPrice("");
          setDeliv(false);
          setLoc("");
        }}
      >
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={descr}
          placeholder="Description"
          onChange={(e) => {
            setDescr(e.target.value);
          }}
        />
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <input
          value={loc}
          placeholder="Location"
          onChange={(e) => {
            setLoc(e.target.value);
          }}
        />
        <label>
          <input
            type="checkbox"
            value={deliv}
            onChange={(e) => {
              setDeliv(!deliv);
            }}
          />
          Will Deliver?
        </label>
        <button className="createPost" type="submit">
          Create Post
        </button>
      </form>
      {posts.map((post) => {
        return (
          <div className="post-container" key={`all Post:${post._id}`}>
            <h1>{post.title}</h1>
            <h2>{post.author.username}</h2>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            <h3>{post.location}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
