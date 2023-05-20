import './App.css';
// import {BrowserRouter} from "react-router-dom"
import Cards from "./componentes/Cards"
import Footer from "./componentes/Footer.jsx"
import Nav from "./componentes/NavBar"
import { useState, useEffect } from "react";
import axios from 'axios';



function App() {
  const [Products, setProducts] = useState([]);
  var url = "https://fakestoreapi.com/products";
  console.log(Products)

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await axios.get(url)
    console.log(response)
    setProducts (response.data)  
  }

  return (
    <>
    
    <Nav/>
    <Cards/>
    <Footer/>

    </>
  );
}

export default App;
