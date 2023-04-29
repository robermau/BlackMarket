import axios from "axios";
import React, { useState, useEffect } from "react";

export const Api = () => {

    const [data, setData] = useState([])
  
    useEffect(() => {
      GetFakeStoreApi()
    }, [])
  
    function GetFakeStoreApi() {
      axios.get("https://fakestoreapi.com/products")
      console.log("HOLA")
        .then((response) => {
          setData(response.data);

          console.log(response);

        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    return (

      <div>{data.map((item) => (
  
        <div>
       
        </div>))}
      </div>)
  }