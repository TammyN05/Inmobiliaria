

            var contenido 
            var tarjetas = [];
    
            //FETCH FUNCTION KELOKE

            var casas = []
            function traerApi(){
                fetch("/js/propiedades.json")
                    .then(res => res.json())
                    .then(data => {
                        casas = data
                        console.log(data);
                        mostrarProductos(data);  
                });
            };

            //TARJETAS TUKI

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


            //SISTEMA DE FILTRADO ANASHI

            // PRECIO
            var botonP = document.getElementById("botonPrecio");
            function ordenarPrecio(){
                fetch("/js/propiedades.json")
                    .then(res=> res.json())
                    .then(data =>{
                        let listaFiltrada = [];
                        for(i=0; i< data.length; i++){
                            if(data[i].precio == 10 && botonP.value==10){
                                listaFiltrada.push(data[i]);
                            } else if (data[i].precio == 30 && botonP.value==30){
                                listaFiltrada.push(data[i]);
                            }else if (data[i].precio == 90 && botonP.value==90){
                                listaFiltrada.push(data[i]);   
                        }
                    }
                    console.log(listaFiltrada)
                    mostrarProductos(listaFiltrada) 
                });
            }
            botonP.addEventListener("click", ordenarPrecio);

            // INTERÉS
            var botonI = document.getElementById("botonInteres")
            function ordenarInteres(){
                fetch("/js/propiedades.json")
                    .then(res=> res.json())
                    .then(data =>{
                        let listaFiltradaI = [];
                        for(i=0; i< data.length; i++){
                            if(data[i].interes == "interés" && botonI.value == "interés"){
                                listaFiltradaI.push(data[i])
                            } else if (data[i].interes == "Venta" && botonI.value == "Venta"){
                                listaFiltradaI.push(data[i])
                            }else if (data[i].interes == "Alquiler" && botonI.value == "Alquiler"){
                                listaFiltradaI.push(data[i])
                            }
                        }
                    console.log(listaFiltradaI)
                    mostrarProductos(listaFiltradaI)
                });
            }
            botonI.addEventListener("click", ordenarInteres)

            // BARRIO
            var botonB = document.getElementById("botonBarrio")
            function ordenarBarrio(){
                fetch("/js/propiedades.json")
                    .then(res => res.json())
                    .then(data =>{
                        let listaFiltradaB = [];
                        for(i=0; i< data.length; i++){
                            if(data[i].barrio == "Barrio" && botonB.value == "Barrio"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Cerro" && botonB.value == "Cerro"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Ciudad Vieja" && botonB.value == "Ciudad Vieja"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Pocitos" && botonB.value == "Pocitos"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Aguada" && botonB.value == "Aguada"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Buceo" && botonB.value == "Buceo"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Punta Carretas" && botonB.value == "Punta Carretas"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Parque Rodó" && botonB.value == "Parque Rodó"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Centro" && botonB.value == "Centro"){
                                listaFiltradaB.push(data[i])
                            }else if(data[i].barrio == "Artigas" && botonB.value == "Artigas"){
                                listaFiltradaB.push(data[i])
                            }
                        }
                        console.log(listaFiltradaB)
                        mostrarProductos(listaFiltradaB)
                    })
            }
            botonB.addEventListener("click", ordenarBarrio)

            // HABITACIONES

            var botonH = document.getElementById("botonHabitaciones")
            function ordenarHabitaciones(){
                fetch("/js/propiedades.json")
                    .then(res=> res.json())
                    .then(data =>{
                        let listaFiltradaH = [];
                        for(i=0; i< data.length; i++){
                            if(data[i].habitaciones == "1" && botonH.value == "1"){
                                listaFiltradaH.push(data[i])
                            } else if (data[i].habitaciones == "2" && botonH.value == "2"){
                                listaFiltradaH.push(data[i])
                            }else if (data[i].habitaciones == "3" && botonH.value == "3"){
                                listaFiltradaH.push(data[i])
                            }else if (data[i].habitaciones == "4" && botonH.value == "4"){
                                listaFiltradaH.push(data[i])
                        }
                     }
                    console.log(listaFiltradaH)
                    mostrarProductos(listaFiltradaH)
                });
            }
            botonH.addEventListener("click", ordenarHabitaciones)

            //Barra de busqueda . nombre

            let botonBuscar = document.getElementById("buscar");
            botonBuscar.addEventListener("click", function (){
            buscar();
            })

            function buscar(){
            let coincidencia = document.getElementById("buscador").value;
            let filtrada = casas.filter(x => x.Titulo.toLowerCase().indexOf(coincidencia.toLowerCase()) > -1);
            console.log(filtrada)
            mostrarProductos(filtrada);
            }

       