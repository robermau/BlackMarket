import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      { <Routes>

    <Route path='/' element={<Home/>}/>
   
    
    </Routes> }

    </div>
  );
}

export default App;
