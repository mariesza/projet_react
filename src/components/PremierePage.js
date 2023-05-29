// importer bibliothèque 
import { Link } from 'react-router-dom';
import { useState } from "react";

//importer fichier
import './PremierePage.css'



function PremierePage(){
    const [displayList, setDisplayList] = useState(false);

    const onClick = () => {
        setDisplayList(!displayList);
      };

      
    return (
    <div classNam = "test">

    <div className="ht-pageune">
     <Link to="/auth/signin">
        <button onClick={onClick}>Se connecter</button>
      </Link>
      <br/>
      <br/>  


    <Link to="/auth/signup">
        <button onClick={onClick}>S'inscrire</button>
      </Link>

    <br/> 
    <h1 className="ht-title">Health Tracker</h1>
    <p>Ton application santé qui te suit au quotidien 🤗</p>
    <img src="/images/logo1.png" width={100} height={100} className="logo" alt="logo de l'application" />

    <Link to="/auth">
        <button1 onClick={onClick}>Découvrir l'application </button1>
      </Link>
    
    <div/>

    <div className="ht-image">
      <img src="/images/image.jpg" className="logo1" alt="Présentation de l'application" />
    </div>

    </div>
    </div>
    )
}

export default PremierePage;