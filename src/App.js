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

      <button onClick={() => onClick()}>Afficher / Masquer</button>
      
      {displayList === true && <PageAccueil />}


    </div>
  );
}

export default App;
