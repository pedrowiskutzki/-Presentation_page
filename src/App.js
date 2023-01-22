import Home from './Pages/Home';
import { GlobalStyle } from './styles/global';
import "./App.css";
import Navbar from './Components/Navbar'
import { Router } from './Routes/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Home/>
      </BrowserRouter>
      </>
      
  );
}

export default App;
