/* 
let edad = 19
let edadString = parseInt(prompt("Ingresa tu edad"))

if (edadString >= 18 && edadString <= 35) {
    console.log("podes comprar una birrita");
} else if(edadString >= 35){
    console.log("vaya a dormir");
}
else {
    console.log("Usted es menor de edad, No puede comprar alcohol");
    
}
 */
/* 
let edadUsuario = parseInt(prompt("Ingresa tu edad"))


if (edadUsuario <= 18){
    console.log("sos muy chivo para entrar");
}else if (edadUsuario >= 18 && edadUsuario <= 35) {
    console.log("podes pasar");
}else if (edadUsuario >= 35 && edadUsuario <= 69) {
    console.log("Usted debe dormir");
}
 */

function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
}
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}
function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
} 
//esto agrega a la pantalla el valor del boton que toquemos en la calculadora
function agregar (valor){
    document.getElementById('pantalla').value += valor
}
//borra el contenido de la pantalla
function borrar (){
    document.getElementById('pantalla').value = ''
}
//esta accion calcula el valor de la pantalla y su calculo
function calcular (){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
