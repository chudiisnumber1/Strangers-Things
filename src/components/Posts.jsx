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
    return <div>

    </div>;
};
export default Posts;
