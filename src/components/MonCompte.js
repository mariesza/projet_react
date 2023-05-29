import ind from '../data/IndividuData';
import './MonCompte.css';

function MonCompte() {
    
    
      return (
      <div>
      
      <div className="ht-banner">
      <a href="/auth"> Retour </a>
      <h1 className="ht-title">Health Tracker</h1>
      <p>Ton application santé qui te suit au quotidien 🤗</p>
      {/* <img src="/images/logo1.png" width={100} height={100} className="logo" alt="logo de l'application" /> */}
    
    </div>
        <div className="presentation" >
          Mes informations personnels : 
        </div>
        <ul className="Individu">
          {ind.map((item) => (
            <div key={item.id}>
              <li> Prénom : {item.firstname} </li>
              <li> Nom : {item.lastname} </li> 
              <li> Date de Naissance : {item.birthyear} </li>
              <li> Poids :{item.height} </li>
              <li> Poids de départ : {item.weightStart} </li>
              <li> Objectif de poids : {item.weightGoal} </li>
              <li> IMC de départ : {item.bmiStart}</li>
              <li> IMC cible : {item.bmiGoal} </li>
              <li> Profil sportif : {item.activityProfile} </li>
            <br/>    
            </div> 
          ))}
        </ul>
        </div>
      );
    }
    
    export default MonCompte;