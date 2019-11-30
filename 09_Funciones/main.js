// funciones

// function declaration

function suma(a, b) {
    console.log(a + b)
}

//  function expression

const resta = function (a, b) {
    console.log(a - b)
}

// ECMA / Arrow Functions

const mult = (num1 = 0, num2 = 0, num3 = 0) => {
    console.log("el resultado de la multipicacion es: " + num1 * num2 * num3)
}

mult(7, 15, 2);
mult(1, 7, 98);
mult(234, 23478, 2);
mult();

const saludo = (usuario = "invitado") => {
    console.log("bienvenido/a " + usuario);
}

saludo("Osvaldo");
saludo("Ricardo");
saludo();

//const sirve para que no se pueda redefinir la funcion
const tablasMutiplicar = () => {

    for (let i = 1; i <= 10; i++) {

        for (let j = 1; j <= 10; j++) {

            let multiplicacion = i * j;
            console.log(i + "x" + j + "=" + multiplicacion);
        }
    }     
}

let string = "'Hola'";
let string2 = '"Hola2"';

console.log(string);
console.log(string2);

// tablasMutiplicar();
// tablasMutiplicar();
// tablasMutiplicar();

// crear una funcion que calcule el area de un triangulo cualquiera

// crear una funcion que calcule el perimetro de un cuadrilatero cualquiera

const areaTriangulo = ( base , altura) => {

    let area = base * altura / 2;

    console.log("El area de tu triangulo es: " + area);

}

areaTriangulo(10, 4);

const perimetroCuadrilatero = (l1, l2, l3, l4) => {

    let perimetro = l1 + l2 + l3 + l4;

    console.log("El primetro e tu cuadrilatero es: " + perimetro)

}

perimetroCuadrilatero(4, 4, 10, 6);