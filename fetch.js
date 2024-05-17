//Codigo sincronico

console.log("esto se ve primero");
console.log("esto se ve segundo");

// codigo asincronico

console.log("esto es primero");
setTimeout(function () { console.log("esto imprime ultimo"); }, 5000);
console.log("esto imprime segundo");


//FETCH

// fetch(url, opciones).then().then().catch()  sintaxis
// Declaracion del objeto literal

const opciones = {
    method: "GET",
    headers: {
        accept: "application/json"
    }
}

fetch("https://rickandmortyapi.com/api/character", opciones)
    .then(function (response) {
        //convertimos la respuesta en un objecto JS
        return response.json();
    })
    // a partir del segundo .then ya podemos utilizar las devoluciones como objetos

    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

//declaramos una funcion para traer al personaje 1

function pedirDatos1() {
    fetch("https://rickandmortyapi.com/api/character/1", opciones)
        .then((response) => { return response.json() })
        .then((personaje) => {
            //hacemos la consulta al objecto
            console.log(personaje.name, personaje.image, personaje.species);
        })
        .catch((error) => {
            console.error(error);
        })
}

//llamada a la funcion

pedirDatos1();

// funcion de renderizado personajes en el frontend

function pedirDatos(){
    fetch("https://rickandmortyapi.com/api/character", opciones)
        .then(response => response.json())

        // en este .then manipulamos al DOM
        .then(personajes => {
            //Obtenemos el contenedor donde renderizamos las tarjetas que estan en el html
            const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

            //Utilizamos un for-each para cargarle objetos del Dom
            personajes.results.forEach(dato => {
                // creamos el elemento html
                const article = document.createElement('article');
                // agregamos estilos a article
                article.classList.add("tarjeta");
                //inyectamos contenido a <article>
                article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
            `
            //adjuntar el contenido
            contenedorTarjetas.appendChild(article)

            });
        })
        .catch()
//llamada a la funcion
}
pedirDatos();