import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsPropsType} from "../../../redux/state";

const MyPosts = (props: postsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} countLike={p.countLike} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts