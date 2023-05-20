import React from "react";
import { useState, useEffect } from "react";

export default function Card() {
  const [datos, setDatos] = useState([]);
  var url = "https://fakestoreapi.com/products";

  useEffect(() => {
    getDatos();
  }, []);

  function getDatos() {
    fetch(url)
      .then((response) => response.json())
      
      .then((responseApi) => {
        console.log(responseApi)
        setDatos(responseApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>

      <div className="bg-black">
        <div className=" grid grid-cols-3 gap-4 py-4 grid-flow-row ">
          
          {datos.map((item) => (
            <div key={item.id} className="py-6">
              <div className="flex max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                <div
                  className="w-1/3 bg-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl ">
                    {item.title}
                  </h1>
                  <p className="mt-2 text-gray-600 text-xs ">
                    {item.description}
                  </p>
                  <div className="flex item-center mt-2 gap-5">
                    <h3>Rate: {item.artista}</h3>
                    <h3>Count: {item.nombre}</h3>
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                      {/* ${item.price} */}
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
