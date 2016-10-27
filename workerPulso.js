var num;
function simula(){
	// body...
  	num = Math.random()*(120-40);
  	if (num<=40) {
    	if (num<=30) {
      		num+=40
    	}
  	}
  	postMessage(num);
  	setTimeout("simula()",10000);
}
simula();
