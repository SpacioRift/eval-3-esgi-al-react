import { useEffect, useState } from "react";
import PostCard from "../../Component/PostCard/PostCard";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post', {
            method: "GET",
            headers:{
                authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5NzM1NDY0fQ.T4xO4a19bmcxCWWX4VBOvR6yWBr8FSHNZ7K4KObaqAE"
            }
        })
            .then(result => result.json())
            .then(data => 
                setPostList(data))
    }, []);

    return (
        <div className="post-list">  
            {
                postList.map(post => {
                    return (
                        <PostCard key={post.id} post={post}>
                            <button> Ajouter aux amis</button>
                        </PostCard>
                    )
                }
                )
            }
        </div>
    )
}