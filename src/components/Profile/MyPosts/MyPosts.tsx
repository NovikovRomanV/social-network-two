import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={''}>
                <Post message='Hi, how are?' countLike={15}/>
                <Post message="It's my first!" countLike={10}/>
            </div>
        </div>
    )
}

export default MyPosts