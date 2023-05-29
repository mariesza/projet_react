import './App.css';
import PageAccueil from './components/PageAccueil';
import { useState } from 'react';

function App() {
  const [displayList, setDisplayList] = useState(false);
  //par défaut displayList a la valeur false
  //donc on cache la liste

  function onClick() {
    setDisplayList(displayList ? false : true);
    //condition ternaire
  }

  return (
    <div className="Health Tracker">
      <h1 className="ht-title">Health Tracker</h1>
      <p>Ton application santé qui te suit au quotidien 🤗</p>
      <img src="/images/logo1.png" width={100} height={100} className="logo" alt="logo de l'application" />
    
      <button onClick={() => onClick()}> Découvre tes progrès </button>
      
      {displayList === true && <PageAccueil />}


    </div>
  );
}

export default App;
