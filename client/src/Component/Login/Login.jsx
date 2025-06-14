import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css";

export default function Login(){

    const [user, setUser] = useState({email:'', password:'', nickname:''});
    const [warning, setWarning] = useState('');

    const toThisPage = useNavigate();
    
    const handleClick = ()=>{
        toThisPage('/Inscription');
    }

    const handleClickToPost = () => {
        toThisPage('/post');
    }

    const handleChange = (event) => {
    setUser({...user, [event.target.name]:event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const res = await fetch('http://localhost:3000/auth/login', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(user),
            });
            
            const data = await res.json();

            if(res.ok == true){
                console.log("Connexion success");
                localStorage.setItem("token", data.jwt);
                handleClickToPost();
            }
            else{
                console.log("Not connected");
                setWarning("email ou mot de passe incorrecte")
                return;
            }
            
            setWarning(data.warning);
        }

        catch(error){
            setWarning("Erreur serveur");
        }

    };

    return (

        <div>
            <form action="">
                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input name="email" type="email" placeholder="email" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="password"><strong>Mot de passe</strong></label>
                    <input name="password" type="password" placeholder="mot de passe" onChange={handleChange}/>
                </div>
                <button onClick={handleSubmit}>Log in</button>
                <p>{warning}</p>
                <button onClick={handleClick}>Créer un compte</button>

            </form>
        </div>

    )

}


