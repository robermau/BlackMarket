import React, { useState, useEffect } from 'react';
import './App.css';


export default function App(){
  useEffect(()=>{
  fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json));
 
 
    });  return (
    <div>
      <h1> consumiendo appi</h1>
    </div>
  );
  

  }  