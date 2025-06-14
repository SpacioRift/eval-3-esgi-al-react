import { useEffect, useState } from "react";
import PostCard from "../../Component/Post/PostCard/PostCard";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post/', {
            method: "POST",
            headers:{
                authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5ODk3Mjc4fQ.QFR9ndRRVv7oS93K84ZzNGyoWAeSg-HWAqyDhX8aPU8"
            }
        })
            .then(result => result.json())
            .then(data => {
                console.log("Posts reçus :", data);
                setPostList(data)})
    }, []);

    return (
        <>
        <div>
            
        </div>
        <div className="post-list">  
            {
                postList.map(post => {
                    return (
                        <PostCard key={post.id} post={post}>
                            <button> Ajouter aux amis</button>
                            <Emotion postId={post.id} /> 
                        </PostCard>
                        
                    )
                }
                )
            }
        </div>
        </>
    )
}