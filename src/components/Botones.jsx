import react from "react";

function Boton (props) {
    return (

    <button type={props.type} className="btn btn-outline-secondary mp-50">{props.name}</button>
    )
}

export default Boton