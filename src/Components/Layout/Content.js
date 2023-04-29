import  React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';
import LogIn from '../../Pages/LogIn';
import LogOut from '../../Pages/LogOut';

function Content() {
  return (
    
    <div className="contenedor items-center w-full">
        <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='login' element={<LogIn/>}/>
              <Route path='logout' element={<LogOut/>}/>
                            
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default Content;