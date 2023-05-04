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
        <div>
        {data.map((item)=>(
            <>
            <div className="container">
            <div className="card">
            <div><p className="fs-1">{item.id}</p></div>
            <div><p className="fs-2">{item.title}</p></div>
            <div><img src={item.image} alt="" /></div>
            </div>
            </div>
            </>
        ))}
    </div>
    )
    }
export default PageProductos;