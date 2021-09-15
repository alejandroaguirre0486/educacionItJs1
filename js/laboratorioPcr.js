
var a1 =parseInt (prompt('Coloque el peso humedo'));
var a2 =parseInt (prompt ('Coloque el peso seco'));
var humedad = (a1 - a2) / a2 * 100 ;
document.write(humedad.toFixed(2));

if (humedad  >= 6 && humedad <= 7.3) {
	document.write ('humedad de la mezcla ok');
}  else  {
	document.write ('controlar humedad de la mezcla')
}

