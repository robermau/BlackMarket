import React from "react";
import Boton from "./Botones";

function Contacto (){

return (
    <>



      <main className="contac">

      <section className="d-flex justify-content-center mb-5 p-5" >


      <form className="col-md-8">
      <h2 className="centr">Dejanos tu mensaje</h2>


        <div className="form-group pt-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            required
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Tu nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            name="correo"
            required
            type="email"
            id="email"
            className="form-control"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            required
            placeholder="Escribe tu mensaje"
            className="form-control"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="8"

          ></textarea>
        </div>
        <div className="form-group mt-3">

        <Boton type="submit" name="enviar"></Boton>

        </div>
      </form>
    </section>
    </main>
</>
    )}
    export default Contacto;