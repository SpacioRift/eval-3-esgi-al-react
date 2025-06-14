import { useState, useEffect } from "react";
import "./emotion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";


export default function Emotion({ postId }) {
    const [emotion, setEmotion] = useState(false);
    const handleClick = () => {
        setEmotion(!emotion);
    };

    useEffect(() => {
        if(emotion){
            fetch(`http://localhost:6666/emoticone/`, { method: "POST" });
        }
        else{
            fetch(`http://localhost:6666/emoticone/${postId}`, { method: "DELETE" });
        }
    }, [emotion]);
            
    return (
        <>
            <div className = "button-container">
                <FontAwesomeIcon icon={emotion?faRegularHeart:faSolidHeart} onClick={() => handleClick()} />
            </div>
        </>
    )
}