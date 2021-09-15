alert("Hola externo");
document.write('Hola desde document write');
console.log('Hola desde consola');
window.prompt('EScribe tu nombre');
window.confirm('te parece ?')

var edad = 34;
var precio=258.10;
console.log(edad);
console.log(precio);
var nombre ='JUAN';
alert(nombre);
nombre ='JUANA';
alert(nombre);
var X =10 ; //number
var X = "10" ;//string
var resultado = true ; //boolean 
console.log(resultado);
const iva = 21 ;

//OPERADORES
//+-/*
var  num1	=5;
var num2	=2;
var total = num1+num2
alert(total);

//OPERADORES LOGICOS

var a  =true;
var b =true;
console.log(a && b);


/*false || false ;
false || true  =true; 
true  || false =true;
true  || true = true;
*/
console.log(!a); //negacion 
//OPERADORES RELACIONALES <	> <= >= == !=
var n1=10;
var n2=20;
console.log(n1 < n2);

var nombre = window.prompt("escribe tu nombre");
console.log('tu nombre es :'+ nombre);

var precio1 = parseInt (window.prompt('escribe el precio'));
var precio2 = parseInt (window.prompt('escribe el segundo precio'));
var precio3 = parseInt (window.prompt('escribe el precio 3'));
var precioFinal = precio1 + precio2 + precio3;
document.write('el precio a pagar es '+ precioFinal);

var m = 1
alert (m);
m ++ ;
alert (m);
m++;
alert(m);
m--;
alert(m);
m+=10;
alert(m);