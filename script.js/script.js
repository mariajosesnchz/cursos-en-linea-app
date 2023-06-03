const carrito = document.getElementById("carrito"),
      listaCursos = document.getElementById("lista-cursos"),
      contenedorCarrito = document.querySelector('.buy-card .lista_de_cursos'),
      vaciarCarritoBtn = document.querySelector('#vaciar_carrito');
registrarEventsListeners()
function registrarEventsListeners() {
    //cuando yo le de click a "agregar al carrito de compras"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
   if(e.target.classList.contains("agregar-carrito")) {
    //console.log("Agregando curso")
    const cursoSeleccionado = e.target.parentElement.parentElement;
    //console.log(cursoSeleccionado)
    leerInfo(cursoSeleccionado)
   }
}
//leer el contenido de nuestro HTML al que le dimos click y extrae la info del curso
function leerInfo(curso) {
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h3').textContent,
        precio:curso.querySelector('.descuento').textContent,
        id : curso.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    }
    //console.log(infoCurso)
}
//Muestra el carrito en el HTML


    