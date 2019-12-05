 let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");
let boton = document.getElementById("boton");
let input = document.getElementById("texto");
let textoUsuario = document.getElementById("textoIN");
//  console.log(parrafo);

const cambiar = () =>{

 titulo.innerHTML = "Cambie el titulo";
 parrafo.innerHTML = "Cambie mi parrafo";
 textoUsuario.innerHTML = input.value
}

boton.addEventListener("click",cambiar);

