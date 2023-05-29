import ind from '../data/IndividuData';

function MonCompte() {
    
    
      return (
        <div className={"Individu" + ind.firstname}>
          {ind.map((item) => (
            <div key={item.id}>
              <li> Prénom : {item.firstname} </li>
              <li> Nom : {item.lastname} </li> 
              <li> Date de Naissance : {item.birthyear} </li>
              <li> Poids :{item.height} </li>
              <li> Poids de départ : {item.weightStart} </li>
              <li> Objectif de poids : {item.weightGoal} </li>
              <li>  </li>
              <a href="/"> Retour </a>
            <br/>    
            </div> 
          ))}
        </div>
      );
    }
    
    export default MonCompte;