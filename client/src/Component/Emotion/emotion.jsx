import { useState } from "react";
import "./emotion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";


export default function Emotion() {
    const [emotion, setEmotion] = useState(false);

        useEffect(() => {
            fetch('http://localhost:3000/user/', { // Modifier l'url en fonction de l'API
                method: "POST"
            })
            .then(result => result.json())
            .then(data => setUserList(data)) // pas nécessaire ici
        });
        useEffect(() => { // Modifier l'url en fonction de l'API
            fetch('http://localhost:3000/user/', {
                method: "DELETE"
            })
            .then(result => result.json())
            .then(data => setUserList(data))// pas nécessaire ici
        });
    setEmotion(!emotion);
            
    return (
    <>
        <div className = "button-container">
            <FontAwesomeIcon icon={emotion?faRegularHeart:faSolidHeart} onClick={() => handleClick()} />
        </div>
    </>
)
}
        

    
