import { useEffect, useState } from "react";
import "./PostCard.css";
import EditPost from "../EditPost/EditPost";
import Emotion from "../../Emotion/emotion.jsx";

export default function PostCard({ post }) {
        const [user, setUserList] = useState("");
        let token = localStorage.getItem("token");
    
        useEffect(() => {
            fetch(`http://localhost:3000/user/${post.authorId}`, {
                method: "GET",
                headers:{
                    authorization: 'Bearer ' + token
                }
            })
                .then(result => result.json())
                .then(data =>{
                    console.log("Utilisateur reçu :", data);
                    setUserList(data)})
        }, [post.authId]);

    return (
        <div className="post-card">
            <div className="author">
                <div className="nickname">
                    {user.nickname  ? user.nickname : "Utilisateur inconnu"}
                </div>
            </div>
            <div className="content">
                <div if={post.picture} className="picture">
                    <img src={post.picture} />
                </div>
                <div className="message">
                    {post.message}
                </div>
            </div>
            <Emotion postId={post.id} /> 
        </div>
    )
}