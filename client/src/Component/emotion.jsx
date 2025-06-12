import { useState } from "react";
import "./emotion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";


export default function Emotion() {
    const [emotion, setEmotion] = useState(false);
    console.log(emotion);
    return (
    <>
        <div className = "button-container">
            <FontAwesomeIcon icon={emotion?faRegularHeart:faSolidHeart} onClick={() => setEmotion(!emotion)} />
        </div>
    </>
)
}