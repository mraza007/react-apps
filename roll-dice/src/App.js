import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Dice from './Dice';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      <h1>Dice App </h1>
      <RollDice/>
    </div>
  );
}

export default App;
