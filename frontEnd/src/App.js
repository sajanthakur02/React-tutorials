
// import './App.css';
import './components/Custom.css';
// import style from './components/Myproject.module.css';
import {Nav} from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <span><Nav className="navbar"/></span>
        <Routes>
           <Route element={<PrivateComponent />}>
           <Route path = "/profile" element = {<h1>Profile Components</h1>} />
            <Route path = "/" element = {<h1>Product listning Components</h1>} />
            <Route path = "/add" element = {<h1>Add Product Components</h1>} />
            <Route path = "/update" element = {<h1>Update Prpduct Components</h1>} />
            <Route path = "/logout" element = {<h1>logout Components</h1>} />
            </Route>
            <Route path = "/login" element = {<Login />} />
            <Route path = "/signup" element = {<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
