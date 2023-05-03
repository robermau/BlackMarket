import React from "react";

import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export const MiAppi = () => {

  const [data , setData] =useState([])

 useEffect(() => {
  getMovie()
 }, [])

  async  function getMovie() {

    const response = await fetch('https://fakestoreapi.com/products')
    const responseData =  await response.json()
    setData(responseData)
    console.log(data)
  }

  return (

    <>
<div className="row row-cols-1 row-cols-md-3 g-4 container-fluid p-5">
      {data.map((item) => (


<div key={item.id}>

              <Col>
                
              <div className="card card-prod">

                    <article className="art-prod-img">

                    <img  className="img-prod" src={item.image} alt={item.title + "imagen"} />

                    </article>

                        
                        <Card.Body className="bod-pro">

                          <h3 className="bod-pro-art">{item.title}</h3>
                          <h4 className="bod-pro-art">{item.price}</h4>
                          {/* <p className="text-pro">{item.description}</p> */}

                          </Card.Body>


              </div>
             
              </Col>

              </div>



       ))}
</div>



    </>

  );
};

export default MiAppi