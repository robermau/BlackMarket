import React from 'react';

const Tarjeta = ({Producto}) => {
  
      return (


<div class="flex items-center justify-center w-80">
    <div class="w-full p-4">
        <div class="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div class="prod-title">
                <p class="text-l font-bold text-gray-900 uppercase">
                  {Producto.title}
                </p>
                <p class="text-sm text-gray-400 uppercase">
                  {Producto.category}
                </p>
            </div>
            <div class="prod-img">
                <img alt="Items" src={Producto.image} class="p-4 object-center w-full "/>
            </div>
           
            <div class="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                <p class="text-l font-bold">
                  $ {Producto.price.toLocaleString('es-AR')}
                </p>
                <button class="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                  Lo quiero!
                </button>
            </div>
        </div>
    </div>
</div>



/* <div className="w-64 p-1 m-auto bg-white shadow-lg rounded-2xl">
    <img src={Producto.image} alt="ProductosVarios" className="w-36 p-0.5 m-auto h-40"/>
    <div className="p-4 m-3 bg-pink-200 rounded-lg">
        <p className="text-xl font-bold text-gray-800 ">
            {Producto.title}
        </p>
        <p className="text-xs text-gray-800">
            {Producto.category}
        </p>
            <div className="flex items-center justify-between ">
            <p className="text-gray-600 font-bold">
            $ {Producto.price.toLocaleString('es-AR')}
            </p>
            <button type="button" className="w-10 h-10 text-base font-medium text-white bg-pink-500 rounded-full hover:bg-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mx-auto" fill="white" viewBox="0 0 1792 1792">
                    <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div> */

);
}
export default Tarjeta