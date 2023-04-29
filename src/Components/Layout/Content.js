import  React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';

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
                            
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default Content;