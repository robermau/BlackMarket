
import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import NewNavbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Home from './components/Home';


function App() {
  return (
    <div >
    
    <NewNavbar/>


      <Routes>
      
      <Route path="/Home" Component={Home}/>



      <Route exact path='/Nosotros' Component={Nosotros}/>
      <Route exact path='/Contacto' Component={Contacto}/>
      <Route exact path='/Productos' Component={Productos}/>

      </Routes>



    <Footer title="Todos los derechos reservados" text="dsvsdf" >
      {/* <h4 className="text-center text-white-50 fs-8 text">esto es un hijo</h4> */}
    </Footer>

    </div>
  );
}

export default App;
