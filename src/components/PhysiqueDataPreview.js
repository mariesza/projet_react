import React from 'react';
import physique from '../data/PhysiqueData.js';

function PhysioDataPreview() {
    
function onClick() {
    console.log(physique.date);
    }

  return (
    <div className={"PhysiqueDataPreview" + physique.date}>
      {physique.map((item) => (
        <div key={item.id}>
          <li>Le {item.date}, tu as fait {item.duration} min de {item.typeOfActivity} et tu as {item.numberOfSteps} pas. </li>
            <p> Tu as donc consommé : {item.consumedCalories} 💪🤗 </p>
        <br/>    
        </div> 
      ))}
    </div>
  );
}

export default PhysioDataPreview;