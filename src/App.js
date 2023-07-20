
import './App.css';
import './components/Custom.css';
import style from './components/Myproject.module.css';
import {Nav} from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <span><Nav className="navbar"/></span>
        <h1>E-Dashboard</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
