import { useState } from "react";
import "./emotion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";


export default function Emotion() {
    const [emotion, setEmotion] = useState(false);
    async function handleClick() {
        try{
            if(!emotion){
                useEffect(() => {
                    fetch('http://localhost:3000/user/', { // Modifier l'url en fonction de l'API
                        method: "POST"
                    })
                    .then(result => result.json())
                    .then(data => setUserList(data))
                });
            }
            else{
                useEffect(() => { // Modifier l'url en fonction de l'API
                    fetch('http://localhost:3000/user/', {
                        method: "DELETE"
                    })
                    .then(result => result.json())
                    .then(data => setUserList(data))
                });
            }
            setEmotion(!emotion);
        }
        catch (error) {
            console.error("Error toggling emotion:", error);
        }
        
    }
    return (
    <>
        <div className = "button-container">
            <FontAwesomeIcon icon={emotion?faRegularHeart:faSolidHeart} onClick={() => handleClick()} />
        </div>
    </>
)
}