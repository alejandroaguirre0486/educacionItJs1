//OBJETOS: CLAVE:VALOR

/*var cliente = {nombre:'Pedro',apellido:'Perez',edad:20};
console.log(cliente.nombre);
	var alumnos = [{nombre:'Pablo',edad:65},
				   {nombre:'Nicolas', edad:50},
				   {nombre:'cristian',edad :16},
				   {nombre:'Walter',edad:30}


				   ];
	console.log(alumnos[2].nombre);
*/

//FUNCIONES 

/*function saludar(){
	alert("Holaaa");
}

function saludar2(){
	var saludo= "hola 2";
	return saludo;
}
console.log(saludar2());

function saludar3 (nombre) {
	alert("Hola"+nombre);
}
saludar3("Juan");

function saludar4(nombre="Fulano"){
	alert("Hola" + nombre);
}


function sumar (a,b,c){
	var suma=a + b + c ;
	return suma;
}
console.log(sumar(2,2,2)); */

/* EJERCICIO LOGUEARSE

	function solicitarUsuario(){
		var user = window.prompt("Escribe tu usuario");
		return user ;
	}

	function solicitarClave (){
		var pass= parseInt(window.prompt("escribe tu clave"));
		return pass ;
	}

	var u = solicitarUsuario();
	var c = solicitarClave();
	console.log(u);
	console.log(c);

	function loguear (u,c) {
		if (u ==admin && c ==1234) {
			var rta = "si puede acceder"
		} else{
			var rta = "no puede acceder"
		}
		return rta;
	}

var mensaje = loguear (u,c);
document.write(mensaje);

*/
/*

var let const



var x = 2;
console.log(x);
*/

/*let

let y =2;
console.log(y);
if (true){
	let y = 4;
	console.log(y)
}
// */
// const c = 2;
// console.log(c);
// if(true){
// 	const c =4;
// 	console.log(c);
// }
// console.log(c);
// c =	6	;
// console.log(c);

//evento con foquitos

let botonE=document.querySelector("#be");
botonE.onclick=	encender;
let bontonA=document.querySelector("#ba");
botonA.onclick= apagar;

function encender (){
document.getElementById('imagen').
src ='../imagenes/on.gif';
}
function apagar () {
	document,getElementsById('imagen').
	src='../imagenes/off.gif';
}