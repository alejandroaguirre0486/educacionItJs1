// function mostrar () {
// let div = document.createElement ('div');
// div.innerHTML = '<p> Hola soy un nuevo elemento </p>';
// document.body.appendChild (div);
// }
// const ul = document.querySelector ("ul");
// let li = document.createElement ('li');
// li.innerText = 'Productos';
// ul.appendChild (li);

// li = document.createElement ('li');
// li.innerText = 'Nosotros';
// ul.appendChild (li);

// li = document.createElement ('li');
// li.innerText = 'Contacto';
// ul.appendChild (li);

// li = document.createElement ('li');
// li.innerText = 'Inicio';
// ul.appendChild (li);

$('#aparece').click(aparecer);
$('#desaparece').click(desaparecer);
function desaparecer() {
    //$('div').hide();
    $('div').fadeOut("slow");
}
function aparecer() {
    //$('div').show();
    $('div').fadeIn("slow");
}

