function timedCount() {

self.addEventListener('message',function (e) {
	var coor = e.data;
	//Envío de datos al servidor
	var valores = JSON.parse(coor);
    var estado;

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
xmlhttp.open("POST", "http://localhost:8080/posiciones");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.onprogress = function () {
};
    xmlhttp.onload = function () {
        estado =  xmlhttp.readyState;
        if(estado==4){
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

},false);

	setTimeout("timedCount()",10000);
}

timedCount();


