import { useEffect, useState } from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
        const [user, setUserList] = useState("");
        console
    
        useEffect(() => {
            fetch(`http://localhost:3000/user/${post.authorId}`, {
                method: "GET",
                headers:{
                    authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5ODk5NDkyfQ.16fWHQijwOLwoboI29NQb5PUBZRMv0FQ24A2IkqQLE8"
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
        </div>
    )
}