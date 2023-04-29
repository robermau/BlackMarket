import React from "react";
import { useState, useEffect } from "react";

export default function Card() {
  const [datos, setDatos] = useState([]);
  var url = "https://fakestoreapi.com/products";

  useEffect(() => {
    getDatos();
  }, []);

  async function getDatos() {
    const response = await fetch(url);
    const responseApi = await response.json();
    setDatos(responseApi);

    console.log(datos.title);
  }

  return (
    <>
      {/* <div className=" bg-east-bay-800">
        <div className=" grid grid-cols-3 gap-4 py-4 grid-flow-row "> */}


          {/* {datos.map((item) => ( */}
            <div className="py-6">
              <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div
                  className="w-1/3 bg-cover"
                  style={{backgroundImage: `url(${datos.image})`}} 
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">{datos.title}</h1>
                  <p className="mt-2 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit In
                    odit exercitationem fuga id nam quia
                  </p>
                  <div className="flex item-center mt-2">
                    <svg
                      className="w-5 h-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current text-gray-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>


          {/* ))} */}
    {/* //     </div>
    //   </div> */}
    </>
  );
}
