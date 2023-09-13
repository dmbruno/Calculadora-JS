
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
