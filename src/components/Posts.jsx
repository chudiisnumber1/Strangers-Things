import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/index.js";




const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const result = await fetchPosts();
            console.log(result, "this is from useEffect in posts");
            setPosts(result);
        };
        getPosts();
    }, []);
    console.log(posts)
    return (
        <div>
            {posts.map((post, i) => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                    </div>
                )
            })
            }
        </div>
    )

};
export default Posts;
