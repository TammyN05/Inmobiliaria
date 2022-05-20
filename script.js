//TRAYENDO EL ARRAY

function traerPropiedades(){
    fetch("propiedades.json")
        .then(respuesta => respuesta.json())
        .then(datosProp =>{
            console.log("Se cargó correctamente.", datosProp);
            mostarCasas(datosProp);
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerPropiedades();
