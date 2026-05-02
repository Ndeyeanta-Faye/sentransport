import { useState } from 'react';
import './App.css';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import StatReseau from './StatReseau';
import Footer from './Footer';

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  const lignes = [
    { id: 1, numero: "1", couleur: "#e74c3c", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14,
      listeArrets: ["Parcelles U14", "Parcelles U10", "Camberene", "Patte d'Oie", "Grand Dakar", "Colobane", "Ponty", "Plateau"] },
    { id: 2, numero: "7", couleur: "#3498db", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18,
      listeArrets: ["Guediawaye", "Pikine", "Thiaroye", "Keur Massar", "Grand Yoff", "Parcelles", "Liberte 6", "Place Obe"] },
    { id: 3, numero: "15", couleur: "#9b59b6", depart: "Pikine", arrivee: "Medina", arrets: 12,
      listeArrets: ["Pikine Centre", "Thiaroye Gare", "Hann", "Colobane", "Fass", "Medina"] },
    { id: 4, numero: "23", couleur: "#e67e22", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10,
      listeArrets: ["Ouakam Village", "Mermoz", "Fann", "Point E", "Liberte 5", "Grand Dakar"] },
    { id: 5, numero: "8", couleur: "#1abc9c", depart: "Almadies", arrivee: "Colobane", arrets: 16,
      listeArrets: ["Almadies", "Ngor", "Yoff", "Ouest Foire", "Liberte 6", "Colobane"] },
    { id: 6, numero: "12", couleur: "#e91e63", depart: "Yoff", arrivee: "Sandaga", arrets: 11,
      listeArrets: ["Yoff Village", "Aeroport LSS", "Parcelles U17", "Grand Yoff", "HLM", "Sandaga"] },
     { id: 7, numero: "31", couleur: "#f39c12", depart: "Fann", arrivee: "HLM", arrets: 9,
      listeArrets: ["Fann", "Point E", "Liberté 3", "Liberté 5", "HLM"] },
    { id: 8, numero: "42", couleur: "#2ecc71", depart: "Liberté 6", arrivee: "Dieuppeul", arrets: 7,
     listeArrets: ["Liberté 6", "Liberté 5", "Liberté 4", "Dieuppeul"] },
    { id: 9, numero: "18", couleur: "#c0392b", depart: "Sicap", arrivee: "Medina", arrets: 13,
     listeArrets: ["Sicap Baobab", "Sicap Liberté", "HLM", "Fass", "Medina"] },
    { id: 10, numero: "5", couleur: "#2980b9", depart: "Medina", arrivee: "Plateau", arrets: 8,
  listeArrets: ["Medina", "Colobane", "Ponty", "Plateau"] },
  ];

  const lignesFiltrees = lignes.filter(l =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <StatReseau lignes={lignes} />
        <Recherche valeur={recherche} onChange={setRecherche} />
        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? 's' : ''} trouvée{lignesFiltrees.length > 1 ? 's' : ''}
        </p>
        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            couleur={ligne.couleur}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee && ligneSelectionnee.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}
        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;