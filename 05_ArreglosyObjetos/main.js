// ---arrays----
let personas = ["Osvaldo", "Ricardo", "Eiichi", "Yael", "Pepe", "Luis"];

console.log(personas);

//----extraer una posicion en especifico---
console.log(personas[4]);

personas[6] = "Raul";

console.log(personas);

// ---.push()----
personas.push("Eduardo");
personas.push("David");

let colores = ["Rojo", "Azul", "Rosa"];

colores.push("Verde", "Cafe", "Morado");

console.log(colores);

//----.pop()-----
personas.pop();
colores.pop();

//----.splice()------
colores.splice(0,1);

console.log("Una persona llamada " + personas[3] + " usa una playera color " + colores[1]);

