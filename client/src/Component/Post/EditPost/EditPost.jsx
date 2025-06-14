import { useState, useEffect } from "react";
import "./EditPost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function EditPost({ PostId, initialMessage, token}){
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState(initialMessage);
    const [image, setImage] = useState(null);

    const HandleUpdate = async () => {
        const formData = new FormData();
        formData.append("post", JSON.stringify({ message }));
        if (image) {
            formData.append("image", image);
        }

        await fetch(`http://localhost:3000/post/${PostId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        setEditing(false);
    }
    return (
        <>
            <FontAwesomeIcon icon={faPen} onClick={() => setEditing(true)} />
            {editing &&
                <div className="overlay_modal">
                    <div className = "contenue_modal">
                        <h3>Modifier le post</h3>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => setImage(e.target.files[0])}
                        />
                        <button onClick={() => HandleUpdate()}>Valider</button>
                        <button onClick={() => setEditing(false)}>Annuler</button>
                    </div>
                </div>

            }
        </>
    )
}