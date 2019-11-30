// ciclos

// for(let i = 0; i <= 10; i = i + 1){
//     console.log(i)
// }

// for(let i = 0; i <= 40; i++){
//     console.log(i)
// }


//ciclo infinito PRECAUCION
// for(let i = 0; i <= 10; i+1){
//     console.log(i)
// }

//Challenge 

// 3 ciclos for 

// 1 que empiece en el numero 5 y termine en el 250 de uno en uno

// 1 que empiece en 99 y termine en -99 de 3 en 3 

// 1 que empiece en -15 y termine en 25 de 5 en 5

// for(let i = 5; i <= 250; i++){
//     console.log(i)
// }

// for(let i = 99; i >= -99; i = i-3){
//     console.log(i)
// }

// for(let iterador = -15; iterador <= 25; iterador = iterador + 5){
//     console.log(iterador)
// }

//challenge Fizz Buzz
// imprimir en consola numeros del 1 al 100
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// 6
// .
// .
// .
// 15 FizzBuzz

// let muestraModulo = 10 % 2;
// console.log(muestraModulo)

//asignacion / comparacion
// = ===

// let numero = prompt("elige un numero");

// if(numero % 2 === 0){
//     console.log("el numero " + numero + " es par.")
// }else {
//     console.log("el numero " + numero + " es impar.")
// }

// let inicio = Number(prompt("ingresa el numero inicial"));

// console.log("la variable inicio es de tipo " + typeof(inicio));

// let final = Number(prompt("en que numero termina"));

// console.log("la variable final es de tipo " + typeof(inicio));

// let sucesion = Number(prompt("de cuanto en cuanto"));

// console.log("la variable sucesion es de tipo " + typeof(inicio));

// for(let i = inicio; i <= final; i = i + sucesion){
//     // console.log(i)
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i + " FizzBuzz")
//     }else if(i % 5 === 0){
//         console.log(i + " Buzz")
//     }else if(i % 3 === 0){
//         console.log(i + " Fizz")
//     }else{
//         console.log(i)
//     }
// }


//Challenge Final Boss 100 Real no Fake 1 link mega 

// imprimir en consola las tablas de multiplicar del 1 al 10

// 1 x 1 = 1
// 1 x 2 = 2
// .
// .
// .
// 10 x 10 = 100

for(let i = 1; i <= 10; i++){

    for(let j = 1; j <= 10; j++){

        let multiplicacion = i * j;
        console.log(i + "x" + j + "=" + multiplicacion);

    }

}
