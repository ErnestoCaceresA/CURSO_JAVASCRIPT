// exportando variables
export let variable = 5;
export const PI = Math.PI;
// exportando funciones
export function sumar(a,b){
    return a + b;
}
export function restar(a,b){
    return a - b;
}
// exportando arreglos y objetos
export const arreglo = [1,2,3,4,5];
export const objeto = {
    nombre: `Ernesto`,
    edad: 19
}
//EXPORTANDO OBJETO CON FUNCIONES DENTRO
function saludar(){
    console.log("HOLA MI NOMBRE ES ERNESTO")
}
function despedir(){
    console.log("ADIOS")
}
export const FuncionesDelSistema = {
    saludar,
    despedir,
}