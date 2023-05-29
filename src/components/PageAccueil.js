//importation des librairies
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

//importation des fichiers
import './PageAccueil.css';
import physio from '../data/PhysioData.js';
import PhysioDataPreview from './PhysioDataPreview';
import PhysiqueDataPreview from './PhysiqueDataPreview';

function PageAccueil() {
  const [displayList, setDisplayList] = useState(false);
  const [displayList2, setDisplayList2] = useState(false);
  const [displayList3, setDisplayList3] = useState(false);

  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [physio, setPhysio] = useState([]);
  const [showPhysio, setShowPhysio] = useState(false);


  
  const onClick = () => {
    setDisplayList(!displayList);
  };

  const onClick2 = () => {
    setDisplayList2(!displayList2);
  };

  const onClick3 = () => {
    setDisplayList3(!displayList3);
  };

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSaveResponse = () => {
    // Implémenter la logique pour enregistrer la réponse
    // par exemple, en l'envoyant à un serveur ou en la stockant localement

    // Afficher un message de succès
    setMessage('Bravo, continue ainsi !');
  };

  useEffect(() => {
    // Simuler une requête asynchrone pour récupérer les données
    const fetchData = async () => {
      try {
        // Appel à l'API ou récupération des données
        const result = await physio.getData();

        // Mise à jour de l'état avec les données récupérées
        setPhysio(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleShowPhysio = () => {
    setShowPhysio(!showPhysio);
  };
  

  const title = 'Health Tracker';

  return (
    <div className="ht-banner">
      <Link to="/auth/signup">
        <button onClick={onClick}>S'inscrire</button>
      </Link>

      <Link to="/auth/signin">
        <button onClick={onClick}>Se connecter</button>
      </Link>

      <Link to="/auth/mon-compte">
        <button onClick={onClick}>Mes infos</button>
      </Link>

      <h1 className="ht-title">{title}</h1>
      <p>Ton application santé qui te suit au quotidien 🤗</p>
      <img src="/images/logo1.png" width={100} height={100} className="logo" alt="logo de l'application" />

      <p>Bonjour, qu'as-tu fait aujourd'hui pour atteindre tes objectifs ?</p>
      <textarea
        value={response}
        onChange={handleResponseChange}
        placeholder="Dis-moi tout !..."
      />
      <br />
      <button onClick={handleSaveResponse}>Enregistrer</button>
      {message && <p>{message}</p>}

      <br/>
      {/* <button onClick={() => onClick3()}>Mon compte</button>
      {displayList3 === true && <ind />}  */}

      <br />
      <br />
    {/* <button onClick={handleShowPhysio}>
      {showPhysio ? "Masquer les données" : "Afficher les données"}
    </button>
    {showPhysio && (
      <div>
        {Object.entries(physio).map(([key,value]) => (
          <div key = {key}>
             <strong>{key}: </strong>
              {value}
            PhysioDataPreview key={uuid()} physio = {physio} />
        ))}
      </div>
   ))}
      </div> */}
  {/* )} */}
    
      <button onClick={() => onClick()}>Afficher l'historique du poids</button>
      {displayList === true && <PhysioDataPreview />}  
      <br />
      <br />
      <button onClick={() => onClick2()}>Afficher l'historique des activités</button>
      {displayList2 === true && <PhysiqueDataPreview />}  


    </div>
    );
}

export default PageAccueil;
