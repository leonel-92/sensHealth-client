function timedCount() {

self.addEventListener('message',function (e) {
	var coor = e.data;
	console.log("Datos: "+ coor);
	//Envío de datos al servidor
	var valores = JSON.parse(coor);
	console.log("valores: "+valores.cliente);
	console.log("frecuencia: "+valores.frecuencia);
	console.log("posicion: "+valores.posicion.lat+"  "+valores.posicion.lon);



var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
xmlhttp.open("POST", "http://localhost:8080/posiciones");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xmlhttp.send(JSON.stringify({cliente: valores.cliente,
        frecuencia:valores.frecuencia,
        posicion:{lat:valores.posicion.lat,
                  lon:valores.posicion.lon},
        fechalocal: valores.fechalocal

      }));



},false);


	setTimeout("timedCount()",10000);
}
timedCount();
