//SIEMPRE AUNQUE ESTEN EN LA MISMA CARPETA DEBE LLEVAR EL ./ ANTES
//    |  CHECAR QUE AL AUTOCOMPLETAS LA RUTA , QUE SE AGREGUE AL FINAL EL .js PORQUE A VECES NO LO AUTOCOMPLETA Y POR ESO DA ERROR  |
import{variable,PI} from "./27__EXPORT.js"; //importando las variables del otro archivo .js
import{sumar,restar} from "./27__EXPORT.js"; //importando las funciones de el otro archivo .js
import{arreglo,objeto} from "./27__EXPORT.js"; //importando los arreglos y objetos
import{FuncionesDelSistema} from "./27__EXPORT.js" //importando el arrglo con funciones dentro

console.log("ESTOS SON VARIABLES, FUNCIONES, ARREGLOS Y TODO\n  IMPORTADAS DE OTRA CARPETA .js")

console.log("VARIABLES IMPORTADAS: ");
console.log(variable);
console.log(PI);

console.log("FUNCIONES IMPORTADAS: ");
console.log(sumar(5,5))
console.log(restar(46,15))

console.log("ARREGLOS Y OBJETOS IMPORTADAS: ");
console.log(arreglo)
console.log(objeto)

console.log("OBJETO CON FUNCIONES DENTRO IMPORTADAS")
FuncionesDelSistema.saludar();
FuncionesDelSistema.despedir();