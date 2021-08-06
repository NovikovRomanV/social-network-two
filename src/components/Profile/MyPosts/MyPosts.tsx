import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsPropsType} from "../../../redux/store";

type AddPostType = {
    addPost: () => void
}
type OnPostChangeType = {
    onPostChange: (text: string) => void
}

const MyPosts = (props: postsPropsType & AddPostType & OnPostChangeType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} id={p.id}/>)

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts