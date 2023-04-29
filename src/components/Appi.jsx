import React, { useEffect } from "react";
import { useState } from "react";


const Appi = () => {

    useEffect (() =>{
        market()
    }

    )

const [data, setData] = useState ([])

async function market () {

    const response = await fetch ('https://fakestoreapi.com/products')
    const responseDAta = await response.jason()
    setData(responseDAta.results)

console.log (data)
}



const list = [];

  data.forEach((item,) => {
    list.push(
      <section>
          <article>
              <div key={item.id}>

                <div >
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                </div>
              </div>
          </article>
      </section>
    );
  });

  return list;

}

export default Appi;
