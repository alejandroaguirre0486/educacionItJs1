	/*
	while(condicion){
		..instruccciones..
		..ajuste..
	}
	*/

	/*
	var num = 1; 

	while(num <= 10){
		document.write(num);
		num++;
	}
	*/

	/*
	num = 100 ;

	do {document.write(num + "<br>");}
	while ( num <= 10) ;
	*/
	
	/* var texto = "" ; 
	do {
		var palabra =window.prompt("Escribe una palabra ");
		texto += palabra  } while (window.confirm ("desea continuar ?"));
	document.write(texto);
		*/
	
	var num = window.prompt("Ingrese un numero");
	for(var i =1 ; i<=10 ; i++) {
		console.log(num +" x " + i + "=" + num * i);
	}

		/*Arreglos

		var edad = [20 , 5 , 4 , 10 , 8 , 6 , 21 , 40 ,1];
		console.log(edad[2]);

		var datos = ["Juan",10,true,80.2];
		var  nombre = new Array ('carlos','ricardo','Luisa');
		console.log(datos.length);

		var tam = edad.length;
		edad [2] = 100;

	 for (var i =0 ; i < tam ; i ++) {
	 	document.write (edad[i] + "<br>");
	 }

	 var atletas = ["Juan", "Cristian","Nicolas","Lucas","Pablo","Walter"];
	 var tiempo = [20,5,8,15,5,3];
	 var menor = tiempo[0];
	 for (i=0; i < tiempo.length ; i++){
	 	if(tiempo[i]<menor){
	 		menor=tiempo[i];
	 		dato= i;
	 	}



	 }
	 document.write("El ganador es: " +	atletas [dato] + " con un tiempo de :" + menor);*/

	 //var num = [20,5,4,10,8,6,2,12,21,1];
	 //document.write(num);

	 var persona1=['leer','cantar','dormir','bailar','jugar'];
	 var persona2=["cantar","comer","escribir","dormir","manejar"];
	 var actividad=[];
	 for(var i=0; i<persona1.length;i++){
	 	for(var j=0; j <persona2.length;j++) {
	 		if (persona1[i]==persona2[j]) {
	 			actividad.push(persona2[j]);
	 		}
	 	}
	 }
	 console.log(actividad);