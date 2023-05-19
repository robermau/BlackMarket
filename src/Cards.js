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
console.log(data)

}
console.log(data)
  
  return (
    <>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
              <div key={item.id} class="group relative">
                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {item.title}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{item.color}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
      ); 
  

}
