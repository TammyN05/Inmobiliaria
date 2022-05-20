var botonGuardar = document.getElementById("botonGuardar");
var listaBuy = [];

function guardarDatos(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dia = document.getElementById("dia").value;
    var hora = document.getElementById("hora").value;
    var pelicula = document.getElementById("pelicula").value;
   
    function comprarBoletos(nombre, apellido, dia, hora, pelicula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dia = dia;
        this.hora = hora;
        this.pelicula = pelicula;
    };

    var nuevaCompra = new comprarBoletos(nombre, apellido, dia, hora, pelicula);
    listaBuy.push(nuevaCompra);
    document.getElementById("formulario").reset();
    mostrarTabla(listaBuy);
};

botonGuardar.addEventListener("click", guardarDatos);

function mostrarTabla(listaBuy){
    var tabla = `
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dia</th>
                <th>Hora</th>
                <th>Pelicula</th>
            </tr>
        </thead>
        <tbody>`
        for(let i=0; i < listaBuy.length; i++){
            var fila = listaBuy[i];
            
            tabla += `
            <tr>
                <td>${fila.nombre}</td>
                <td>${fila.apellido}</td>
                <td>${fila.dia}</td>
                <td>${fila.hora}</td>
                <td>${fila.pelicula}</td>
            </tr>`
        };
        tabla += `
        </tbody>
    </table>`
    document.getElementById("tabla").innerHTML = tabla;
};
