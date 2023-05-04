import React from "react";
import { useEffect, useState } from "react";

const PageProductos =()=>{
    const [data, setData]=useState([])
    useEffect(()=> {
        getApi()
    },[])

    /*Api*/
    async function getApi() {
        const response = await fetch('https://fakestoreapi.com/products');
        const responseData= await response.json();
        setData(responseData)
        console.log(responseData);
    }
    return (
        <div className="container">
            <div className="row row-cols-2">
            {data.map((item)=>(
                <>
                <div className="col">

                    <div className="card px-1 py-1">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={item.image} class="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.id}</p>
                        <p className="card-text">{item.price}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            ))}
            </div>
        </div>
    )
    }
export default PageProductos;