import { use, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Inscription.css";

export default function Inscription(){

    const toThisPage = useNavigate();
        
    const handleClick = ()=>{
        toThisPage('/Login')
    }
    
    const [user, setUser] = useState({email:'', password:'', nickname:''});
    const [waring, setWarning] = useState('');
    
    const handleChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const res = await fetch('http://localhost:3000/auth/signin', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(user),
            });

            const data = await res.json();
            setWarning(data.waring);

            if(res.ok == true){
                handleClick();
            }
            else{
                
            }
        }

        catch(error){
            setWarning("Erreur d'inscription");
        }
    };
        
    return (

        <div>
            <form onSubmit={handleSubmit}>

                 <div>
                    <label htmlFor="nickname"><strong>Pseudo</strong></label>
                    <input name="nickname" type="text" placeholder="Pseudo" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input name="email" type="email" placeholder="email" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="password"><strong>Mot de passe</strong></label>
                    <input name= "password" type="password" placeholder="mot de passe" onChange={handleChange}/>
                </div>

                <button type ="submit" onClick={handleClick}>Inscription</button>
                <button type ="submit" onClick={handleClick}>Log in</button>
            
            </form>
        </div>

    )

}
