//Inputs
let name = document.getElementById("Name");
let add = document.getElementById("Add");
let food = document.getElementById("Food");
//Etiquetas p
let textName = document.getElementById("textName");
let textAdd = document.getElementById("textAdd");
let textFood = document.getElementById("textFood");
//boton
let boton = document.getElementById("boton");

const ordenar = () =>{


textName.innerHTML = name.value;
textAdd.innerHTML = add.value;
let resultFood = food.value.toUpperCase();

    if(resultFood === "CON"){
        textFood.innerHTML = "UmU";
    }else if(resultFood === "SIN"){
        textFood.innerHTML = "UwU";
    }else{
        textFood.innerHTML = "No te entendi";
    }
}

boton.addEventListener("click", ordenar);