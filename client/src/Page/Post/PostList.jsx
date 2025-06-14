import { useEffect, useState } from "react";
import PostCard from "../../Component/Post/PostCard/PostCard";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post/', {
            method: "GET",
            headers:{
                authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5ODk5NDkyfQ.16fWHQijwOLwoboI29NQb5PUBZRMv0FQ24A2IkqQLE8"
            }
        })
            .then(result => result.json())
            .then(data => {
                console.log("Posts reçus :", data);
                setPostList(data)})
    }, []);

    return (
        <>
        <div className="post-create">
            
        </div>
        <div className="post-list">  
            {
                postList.map(post => {
                    return (
                        <PostCard key={post.id} post={post}>
                             
                        </PostCard>
                    )
                }
                )
            }
        </div>
        </>
    )
}