import './App.css';
import Header from './Header';
import Tableau from './components/Tableau';

function App() {

  return(
    <div className="App">
      <Header />
      <main className="contenu">
        <p> Bienvenue ! Cette application vous aide a trouver votre ligne de bus à Dakar</p>
        <Tableau titre = "d'utilisateur"/>
      </main>
    </div>
  );
}
export default App;