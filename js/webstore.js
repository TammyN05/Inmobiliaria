function guardarLocal(){

    var nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre);
    document.getElementById("mostrar").innerHTML = localStorage.getItem("nombre");
    //document.getElementById("nombre").reset();

    var nombre = document.getElementById("password").value;
    localStorage.setItem("password", apellido);
    document.getElementById("mostrar").innerHTML = localStorage.getItem("password");
    //document.getElementById("apellido").reset();

}    
document.addEventListener("click", guardarLocal);

document.getElementById("mostrar").innerHTML = localStorage.getItem("nombre");