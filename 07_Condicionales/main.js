// alert("Que pachuca x Toluca");

// if(condicion){
//     accion si cumple la condicion
// }else{
//     accion si no se cumple
// }
//Operadores
//< > >= <= == === != && ||


let numero = 5; 

// if(numero === "5"){
//     console.log('Es un numero');
// }else{
//     console.error("No es un numero");
// };

// let sofi = "agua";

// if(sofi === "refresco"){
//     console.log("Toma mucho refresco");
// }else if(sofi === "cafe"){
//     console.log('Toma mucho cafe');
// }else if(sofi === "agua"){
//     console.log("Es saludable");
// }else{
//     console.error("Toma aceite");
// }


//Preguntar al usuario su contraseña
// password = 

// let usuario = prompt('Hola');
// let password = 'perritoSalchicha123'

// if(usuario != password ){
//     console.error('Tas muerto bro!');
   
// }else{
//     console.log('Bienvenido');
// }

// let edad = Number(prompt("Ingresa tu edad"));

// if(edad <= 15){
//     console.log("No te puedes morro xd");
// }else if(edad === 16 || edad === 17){
//     console.log('Pudes sacar tu permiso');
// }else if(edad >= 18 && edad <=80){
//     console.log('Puedes manejar');
// }else if(edad > 80){
//     console.log('No puedes manejar por tu seguridad');
// }else{
//     console.error('No te entendi perro!')
// }

let player1 = prompt("P1: Piedra, Papel o Tijera");
let player2 = prompt("P2: Piedra, Papel o Tijera");
//toUpperCase
let p1 = player1.toLowerCase();
// console.log(p1); 
let pl2 = player2.toLowerCase();

if( p1 === pl2){
    console.log("Empate");
}else if(p1 === "piedra" && pl2 === "tijera" || p1 === "papel" && pl2 === "piedra" || p1 === 'tijera' && pl2 === "papel"){
    console.log("Gana player 1");
}else{
    console.log("Gana player 2");
}