import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];


export const Cards = () => {
 useEffect(() => {
   getCard();
 }, []);

 const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }]

 const [data, setData] = useState([])

  async function getCard(){
const response = await axios.get("https://fakestoreapi.com/products");
setData(response.data)

}
console.log(data)
  
  return (
    <>
      <div>
        Cards
        {data.map((item) => (
          
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                 
                    <div key={item.id} className="group relative">
                      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={item.image}
                          alt={"ho"}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            
                              {item.name}
                            
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                   
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </div>
               
                </div>
              </div>
            </div>
          
        
        ))}
      </div>
      <>
     
      </>
    </>
  );
}
