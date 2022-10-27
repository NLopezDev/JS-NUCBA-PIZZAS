//EJERCICIOS JS CLASE2 NUCBA

//EJERCICIO1
let nombre = "Nicolas";
let edad = 27;

console.log(nombre + " " + edad);

//EJERCICIO2 
let nombre2 = "Nicolas";
let edad2 = 27;

console.log("Hola! mi nombre es", nombre2 + " y tengo", + edad2, "años");

//EJERCICIO 3
nombre2 = "Ignacio";
edad2 = 20;

console.log("Hola! mi nombre es", nombre2 + " y tengo", + edad2, "años");

//EJERCICIO4
let numeroA = 20;
let numeroB = 27;
let suma = 0;

suma = numeroA + numeroB;

console.log("La suma de ambos numeros es " + suma); 

//EJERCICIO5
let numero = 15;
numero = 25;

console.log(numero);

//EJERCICIO6
let numeroC = 22;

alert(numeroC);

//EJERCICIO7
let val = prompt("Ingrese un valor ");

console.log(val);

//EJERCICIO8
let valor = prompt("Ingrese un valor: ");

alert("El valor ingresado es " + valor);

//EJERCICIO9
var nombre3 = prompt("Ingrese un nombre: ");
var nombre4 = prompt("Ingrese otro nombre: ");

alert("El primer nombre ingresado es: " + nombre3 + ", el segundo ingresado es: " + nombre4);

//EJERCICIO10
var nombre5;

console.log(nombre5);

nombre5 = "Carlos";


//EJERCICIO15
let edad4 = 27;

if (edad4 >=18){
    console.log("Soy mayor de edad");
}else {
    console.log("Soy menor de edad");
}

//EJERCICIO16
let a = 22;
let b = 27;

if (a > b){
    console.log(`${a} es mayor que ${b}`);
}else if (a < b){
    console.log(`${a} es menor que ${b}`);
}else 
{console.log(`${a} y ${b} son iguales`);}

//EJERCICIO17
let valor2 = prompt("Ingrese una palabra");

if (valor2 === "alerta") {
    alert("Soy una alerta");
}else if (valor2 === "consola"){
    console.log("Soy un mensaje en la consola");
}else {
    alert("Me muestro en ambos lados");
    console.log("Me muestro en ambos lados");
}

//EJERCICIO18
let edad5 = 41;

if (edad5 < 20 && edad5 < 13){
    console.log("Soy un niño");
}else if (edad5 < 20 && edad5 >= 13){
    console.log("Soy un adolescente");
}else if (edad5 >= 20 && edad5 <50){
    console.log("Soy un adulto");
}else {
    console.log("Soy un adulto mayor");
}

//EJERCICIO19
let fruta = "manzana";

switch (fruta){
    case "frutilla":
        console.log("Soy una frutilla");
        break;
    case "banana":
        console.log("Soy una banana");
        break;
    case "naranja":
        console.log("Soy una naranja");
        break;
    case "manzana":
        console.log("Soy una manzana");
        break;
    default:
        console.log("No se que soy");
        break;    
}

const pizzas = ["1", "2", "3", "4", "5", "6", "7"];
const sabores = ["Napolitana", "Muzzarella", "Con jamon", "Fugazzeta", "Calabresa", "Rucula"];


const pizza1 = {
    id: 1,
    nombre: "Napolitana",
    ingredientes: "tomate, queso, albahaca, aceote de oliva",
    precio: 480,
};

const pizza2 = {
    id: 2,
    nombre: "Muzzarella",
    ingredientes: "salsa, muzzarella",
    precio: 380,
};

const pizza3 = {
    id: 3,
    nombre: "Con jamon",
    ingredientes: "muzzarella, fetas de jamon, variantes con morrones, rucula o jamon crudo",
    precio: 520,
};

const pizza4 = {
    id: 4,
    nombre: "Fugazzeta",
    ingredientes: "queso muzzarella, y rodajas finas de cebolla",
    precio: 520,
};

const pizza5 = {
    id: 5,
    nombre: "Calabresa",
    ingredientes: "queso muzzarella, longaniza calabresa o chorizo seco",
    precio: 580,
};

const pizza6 = {
    id: 6,
    nombre: "Rucula",
    ingredientes: "queso muzzarella, rucula, oregano, aceitunas",
    precio: 4700,
};