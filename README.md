# Calculadora-JS
## ESTE ES UN EJERCICIO DADO EN UN CURSO DE JS, CONSISTE EN HACER UNA CALCULADORA CON FUNCIONES BASICAS
#### Use distintas funciones que detallo a continuacion:
function agregar (valor){
    document.getElementById('pantalla').value += valor
}
#### esta funcion agrega el valor seleccionado en "pantalla"

function borrar (){
    document.getElementById('pantalla').value = ''
}

#### esta funcion al apretar el boton C, elimina todo el contenido de la pantalla de ahi el = ''

function calcular (){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
#### por ultimo la funcion que toma el valor de pantalla y al apreatar el boton = de la calculadora, el programa hace el calculo pretendido por el usuario y lo muestra en pantalla como la
variable RESULTADO.
