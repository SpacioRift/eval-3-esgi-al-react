import { useEffect, useState } from "react";
import ButtonCreatePost from "../../Component/Button/CreatePost/ButtonCreatePost";
import PostCard from "../../Component/Post/PostCard/PostCard";
import "./PostList.css";

export default function PostList() {
    const [postList, setPostList] = useState([]);
    let token = localStorage.getItem("token");

    useEffect(() => {
        fetch('http://localhost:3000/post/', {
            method: "GET",
            headers:{
                authorization: 'Bearer ' + token,
            }
        })
            .then(result => result.json())
            .then(data => {
                console.log("Posts reçus :", data);
                setPostList(data)})
    }, []);

    return (
        <>
            <div className="container">
                <div className="post-create">
                    <ButtonCreatePost />
                </div>
                <div className="post-list">  
                    {
                        postList.map(post => {
                            return (
                                <PostCard key={post.id} post={post}>
                             
                                </PostCard>
                            )
                        })   
                    }
                </div>
            </div>
        </>
    )
}