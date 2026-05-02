import './LigneBus.css';

function LigneBus({ numero, couleur, depart, arrivee, arrets, estSelectionnee, onClick }) {
  const couleurBadge = couleur || '#0a6e31';

  return (
    <div
      className={`ligne-bus ${estSelectionnee ? 'ligne-bus-active' : ''}`}
      style={{ borderLeft: `4px solid ${couleurBadge}` }}
      onClick={onClick}
    >
      <div
        className="ligne-numero"
        style={{ backgroundColor: couleurBadge }}
      >
        {numero}
      </div>
      <div className="ligne-info">
        <span className="ligne-trajet">{depart} &rarr; {arrivee}</span>
        <span className="ligne-arrets">{arrets} arrêts</span>
      </div>
    </div>
  );
}

export default LigneBus;