import ind from '../data/IndividuData';
import './MonCompte.css';

function MonCompte() {
  return (
    <div>
      <div className="ht-banner">
        <a href="/auth"> Retour </a>
        <h1 className="ht-title">Health Tracker</h1>
        <p>Ton application santé qui te suit au quotidien 🤗</p>
      </div>
      <div className="presentation">Mes informations personnelles </div>
      <div className="Individu">
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Prénom </div>
              <div>{item.firstname}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Nom </div>
              <div>{item.lastname}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Date de Naissance </div>
              <div>{item.birthyear}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Poids </div>
              <div>{item.height}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Poids de départ </div>
              <div>{item.weightStart}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Objectif de poids </div>
              <div>{item.weightGoal}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">IMC de départ </div>
              <div>{item.bmiStart}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">IMC cible </div>
              <div>{item.bmiGoal}</div>
            </div>
          </div>
        ))}
        {ind.map((item) => (
          <div key={item.id} className="individu-info">
            <div className="info-item">
              <div className="info-label">Profil sportif </div>
              <div>{item.activityProfile}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonCompte;