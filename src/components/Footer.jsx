import React from "react";

function Footer (props) {
    return(
        <nav className="bg-dark justify-content-center p-2" data-bs-theme="dark">
                  

            <h5 className="text-center text-white-50 fs-6 text">{props.title}</h5>
            {/* {props.children} */}
            <p className="text-center text-white-50 fs-8 text m-0">{props.text}</p>
            

        </nav>
    )
}

export default Footer