import React from "react";
import { fetchPosts} from '../api/index.js';
import { useEffect, UseState } from 'react';
import { useState } from "react/cjs/react.production.min";



const Posts = () => {
    const[posts, setPosts] = useState([])

    useEffect() => {
        
    }

    return <div>Post</div>;
};

export default Posts;
