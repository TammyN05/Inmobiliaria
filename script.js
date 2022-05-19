

            var contenido 
            var tarjetas = [];
    
            function traerApi(){
                fetch("propiedades.json")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        mostrarProductos(data);  
                });
            };

            traerApi();
            function mostrarProductos(data){
                contenido =`
                <div class="album py-5 ">
                    <div class="container">
                        <div class="row">`;
                for(let casas of data){
                    contenido +=
                        `<div class="col col-md-4 col-lg-3">
                            <div class="card  mb-4">
                                <img class="card-img-top" src="${casas.imagen}"/>
                                <h5 class="card-title">En ${casas.interes}</h5>
                                <p class="card-text overflow">U$S ${casas.precio}</p>
                                <p class="card-text overflow"> Habitaciones: ${casas.habitaciones}</p>
                                <p class="card-text overflow"> M2: ${casas.m2}</p>
                                <p class="card-text overflow ultimo"> Barrio: ${casas.barrio}</p>
                            </div>
                        </div>
                <div class="w-100 d-none d-sm-block d-md-none"><!-- wrap every 2 on sm--></div>`
                            
                };
                contenido += 
                `       </div>
                    </div>
                </div>` 
                document.getElementById("casas").innerHTML = contenido;          
            }