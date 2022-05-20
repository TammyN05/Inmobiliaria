function guardarLocal(){

    var nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre);
    document.getElementById("mostrar").innerHTML = localStorage.getItem("nombre");
    //document.getElementById("nombre").reset();

    var nombre = document.getElementById("apellidos").value;
    localStorage.setItem("apellidos", apellido);
    document.getElementById("mostrar").innerHTML = localStorage.getItem("apellidos");
    //document.getElementById("apellido").reset();

    var nombre = document.getElementById("email").value;
    localStorage.setItem("email", email);
    document.getElementById("mostrar").innerHTML = localStorage.getItem("email");
    //document.getElementById("email").reset();

}    
document.addEventListener("click", guardarLocal);

