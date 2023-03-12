import logo from './assets/daisy.jpg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DAISY  
        </p>
        <a
          className="App-link"
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
