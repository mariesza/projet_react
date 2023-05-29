import { v4 as uuid } from 'uuid';

import React from 'react';
import physio from '../data/PhysioData.js';

function PhysioDataPreview() {
    
    function onClick() {
    console.log(physio.date);
  }

  return (
    <div className={"PhysioDataPreview" + physio.date}>
      {/* <button onClick={() => onClick()}>{physio.date}</button> */}
      {physio.map((item) => (
        <div key={item.id}>
          <p>Le {item.date}, ton poids était de : {item.weight} kg</p>
        </div> 
      ))}
    </div>
  );
}

export default PhysioDataPreview;
