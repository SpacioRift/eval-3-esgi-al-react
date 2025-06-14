import { useEffect, useState } from "react";
import "./PostCard.css";

export default function PostCard({ post }) {
        const [user, setUserList] = useState(null);
        console
    
        useEffect(() => {
            fetch(`http://localhost:3000/user/${post.AuthId}`, {
                method: "GET",
                headers:{
                    authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWFzdDJAbXlnZXMuZnIiLCJpZCI6MSwiaWF0IjoxNzQ5ODk3Mjc4fQ.QFR9ndRRVv7oS93K84ZzNGyoWAeSg-HWAqyDhX8aPU8"
                }
            })
                .then(result => result.json())
                .then(data =>
                    setUserList(data))
        }, [post.authId]);

    return (
        <div className="post-card">
            <div if={post.picture} className="picture">
                <img src={post.picture} />
            </div>
            <div className="message">
                {post.message}
            </div>
            <div className="">
                {user.nickname  ? user.nickname : "Utilisateur inconnu"}
            </div>
        </div>
    )
}