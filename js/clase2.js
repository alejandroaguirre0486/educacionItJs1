
var edad =window.prompt('¿Cual es tu edad');
if (edad>=18){
	console.log('Puedes pasar a bailar');
	if (edad ===22){console.log('por tu edad tenes una cerveza gratis')}
}
else
{
	console.log('NOOOO podes pasar a bailar');
}

var salario;
var horas;
var horaNormal = 16;
var horaExtra = 20;
var maxHora = 40;
var salarioExtra;

nombre=window.prompt("Escribe tu nombre");
horas=parseInt (window.prompt("Escribe cantidad de horas"));
if (horas <= maxHora)	{
	salario =horas * horaNormal;
}

else

	{

	salario = horaNormal*maxHora;
	horas = horas-maxHora;
	salarioExtra=horas*horaExtra;
	salario=salario+salarioExtra;

}
document.write(nombre + " su salario semanal es "+ salario);


var num =parseInt (window.prompt("Escribe un numero"));
if(num >0 && num <=9 ){
	document.write("<br> es de una una Cifra");
}else if (num >= 10 && num <= 99) {
	document.write("<br> es de dos cifras");
}else if (num >= 100 && num <= 999) {
	document.write("<br> es de tres cifras");

}else if (num >= 1000 && num <= 9999) {
	document.write("<br> es de cuatro cifras");
}


//FECHAS 

var fecha = new Date ();
var dia = fecha.getDay();
console.log(dia);

switch(dia){

	case 0:
	console.log('Domingo');
	break
;
case 1:
console.log("Lunes de crossfit");
break;

case 2:
console.log("Martes de funcional");
break;

case 3 :
console.log("Miercoles de strengh");
break;

case 4:
console.log("Jueves de funcional");
break;

case 5:
console.log ("Viernes de strengh");
break;


default:
console.log ("Sabado de descanso");




}