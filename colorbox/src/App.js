import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import BoxContainer from './components/BoxContainer';


function App() {
  return (
    <div className="App">
      <BoxContainer numBoxes={12}/>
    </div>
  );
}

export default App;
