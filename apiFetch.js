console.log("Tarea API Fetch");
const urlUser = "https://reqres.in/api/users?delay=3";

// Hacer el fetch a la API
async function getUsers(url) {
    try {
        const response = await fetch(url);
        const users = await response.json();
        console.log("Datos del Servidor: ");
        console.log(users.data);
        imprimirEnDOM(users.data);
        //Guardar datos en el local storage
        localStorage.setItem("datos", JSON.stringify(users.data))
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
}
// getUsers(urlUser);


//Obtener datos del local storage
const getData = () => {
    //Verifico si hay datos en el local storage
    if(localStorage.getItem("datos")){
        const datos = JSON.parse(localStorage.getItem("datos"));
        console.log("Datos del Local Storage: ");
        console.log(datos);
        imprimirEnDOM(datos);
    }else{
        console.log("No hay datos en el local storage");
    }
   
}
// getData()

// Imprimir contenido/usuarios en el DOM
function imprimirEnDOM(users) {
    const usersContainer = document.querySelector("#elements");
    const usersTitle = users.map((user) => {
        return `
              <article class="col-sm-3 col-lg-3" >
                <p class="card-text">${user.id}</p>            
              </article>
              <article class="col-sm-3 col-lg-3" >
                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>  
              </article>
              <article class="col-sm-3 col-lg-3" >
                <p class="card-text">${user.email}</p>  
              </article>
              <article class="col-sm-3 col-lg-3" >
                <img src="${user.avatar}" class="img-fluid card-img-top" alt="${user.first_name}" >    
              </article>
              `;
    });

    usersContainer.innerHTML = usersTitle.join("");
}

/* //Verificar la fecha en que se hizo una solicitud get
const diferenciaTiempo = () => {
    const fechaActual = new Date();
    const tiempoEnMilisegundos = fechaActual.getTime();
    const tiempoEnSegundos = tiempoEnMilisegundos / 1000;
    console.log(tiempoEnSegundos);

}
diferenciaTiempo() */

//Funcion de caragar datos al dar clik al boton
let tiempoInicio;
let ultimoTiempo;
const buttonClick = () => {
    cargaPagina()
    let tiempoActual = new Date().getTime();
    let tiempoDiferencia = (tiempoActual - ultimoTiempo) / 1000;

    if (ultimoTiempo) {
        console.log(`Diferencia de tiempo: ${tiempoDiferencia} segundos`);
    } else {
        console.log("Primera vez que haces clic");
    }

    if(tiempoDiferencia < 10){
        getData();
    }else{
        localStorage.clear();
        getUsers(urlUser);
    }

    ultimoTiempo = tiempoActual;

}


// Simulando un retraso de carga para mostrar el indicador
const cargaPagina = () => {
    const usersContainer = document.querySelector(".loadeer");
    usersContainer.innerHTML = `
        <div class="loading-container">
            <div class="loader"></div>
        </div>
        `
    setTimeout(() => {
        // Ocultar el indicador de carga y mostrar el contenido principal
        document.querySelector('.loading-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500);
} // Este es un ejemplo de retraso de carga (3000 milisegundos = 3 segundos), puedes ajustarlo según tu necesidad.




