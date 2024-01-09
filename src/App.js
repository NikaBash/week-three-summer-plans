import './App.css';
import { Plans } from './Plans';
import image from './plans.jpg';
import imageTwo from './plansTwo.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={ image } alt="plan" width="200px" />
      </div>
      <div className="container">
      <h1>Plans for the summer</h1>
      </div>
      <Plans/>
      <div className="container">
        <img src={ imageTwo } alt="plan"  width="200px"/>
      </div>
    </div>

  );
}

export default App;
