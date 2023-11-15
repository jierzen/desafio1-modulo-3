const precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let unidad;

function sumar(){
    unidad = parseInt(document.querySelector(".cantidad").innerHTML);
    unidad += 1;
    document.querySelector(".cantidad").innerHTML = unidad;
    calcularTotal(unidad);
}

function restar(){
    unidad = parseInt(document.querySelector(".cantidad").innerHTML);
    unidad -= 1;
    document.querySelector(".cantidad").innerHTML = unidad;
    calcularTotal(unidad);
}

function calcularTotal(unidades){
    let total = precio * unidades
    document.querySelector(".valor-total").innerHTML = total;
}