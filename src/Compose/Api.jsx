var EVENTS_API = "https://fakestoreapi.com/products";

async function getDataEvents() {
  const response = await fetch(`${EVENTS_API}`);
  const json = await response.json();
  const data = json;
  console.log("Salida Data "+data)
  return data
}

async function displayCardUpcoming() {
 let datos= await getDataEvents();
 var templateCardUpcoming = "";
 datos.forEach(evento => {
     templateCardUpcoming += 
     `<div  >
          <img src="${evento.image}" alt="imagen" width="20%"  >
              <h5>Producto: ${evento.title}</h5>
              <P>Descripcion: ${evento.description}</p>
              <p>Categoria: ${evento.category}</p>
              <p>Importe U$S: ${evento.price}</p>
              <p>Puntuacion: ${evento.rating.rate}</p>
              <p>Cantidad: ${evento.rating.count}</p>
      </div>`;
    });
  document.getElementById('Card').innerHTML = templateCardUpcoming
}
displayCardUpcoming()