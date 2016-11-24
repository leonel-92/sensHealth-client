function timedCount() {

self.addEventListener('message',function (e) {
	var coor = e.data;
	console.log("Datos: "+ coor);
	//Envío de datos al servidor
	var valores = JSON.parse(coor);
    var estado;
	console.log("valores: "+valores.cliente);
	console.log("frecuencia: "+valores.frecuencia);
	console.log("posicion: "+valores.posicion.lat+"  "+valores.posicion.lon);



var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    console.log('status de peticion inicializacion: '+xmlhttp.readyState);
xmlhttp.open("POST", "http://localhost:8080/posiciones");
    console.log('status de peticion puerto abierto: '+xmlhttp.readyState);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    console.log('status de peticion header: '+xmlhttp.readyState);

    xmlhttp.onprogress = function () {
    console.log('LOADING', xmlhttp.readyState); // readyState will be 3
};
    xmlhttp.onload = function () {
    console.log('DONE', xmlhttp.readyState); // readyState will be 4
        estado =  xmlhttp.readyState;
        if(estado==4){
            console.log('status de estado: '+estado);
            postMessage(estado);
        }else{

             }
};
xmlhttp.send(JSON.stringify({cliente: valores.cliente,
        frecuencia:valores.frecuencia,
        posicion:{lat:valores.posicion.lat,
                  lon:valores.posicion.lon},
        fechalocal: valores.fechalocal

      }));
    console.log('status de peticion enviado: '+xmlhttp.readyState);
    console.log('Datos guardados en base de datos satisfactoriamente');




},false);



	setTimeout("timedCount()",10000);
}

timedCount();


