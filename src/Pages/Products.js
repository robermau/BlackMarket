import ComponenteCard from '../Components/ComponenteCard';
import axios from "axios";
import { useEffect, useState } from "react";

const StoreItems = () => {

    const [Productos , setData] =useState([])

    useEffect(() => {
    getProductos()
    }, [])

    function getProductos() {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          console.log (response)
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

        return (
        

          <div className="px-4 flex flex-wrap gap-10 items-center">
            
            {
        Productos.map((Producto,i) => {
          return <ComponenteCard key={Producto.id} Producto={Producto}/>
        })}
      
          </div>
            )
      
  }

  export default StoreItems