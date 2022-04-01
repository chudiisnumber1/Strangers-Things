import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/index.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    getPosts();
  });
  return (
    <div>
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

// const newPost = () => {
//   const [newPost, setNewPost] = useState();

//   useEffect(() => {
//     const makePost = async () => {
//       const result = await createPost();
//       setNewPost(result);
//     };
//     makePost();
//   });
//   console.log(newPost);
//   return(<div className="newPost">
//     <form onsubmit={(e) => {
//       e.preventDefault();
//     }
//     <input value={title} type="text" placeholder="title" onChange={(event) => {await createPost(title)}}
//   }
//   </form>
//   </div>)
// };

// const newMsg = () => {
//   const [newMsg, setNewMsg] = useState();

//   useEffect(() => {
//     const makeMsg = async () => {
//       const result = await createMessage();
//       setNewMsg(result);
//     };
//     makeMsg();
//   });
//   console.log(newMsg);
//   return()
// };

export default Posts;
