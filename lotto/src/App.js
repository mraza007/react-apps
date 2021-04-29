import logo from './logo.svg';
import './App.css';
import LotteryBall from './components/LotteryBall'
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">

      <Lottery maxNum={20} title="BIG WIN" maxBalls={10}/>
      <Lottery maxNum={20} title="BIG WIN" maxBalls={2}/>
    </div>
  );
}

export default App;
