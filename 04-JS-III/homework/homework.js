// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array.pop();
  return ultimo;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var incremento=[];
  for (var i = 0; i < array.length; i++){
    incremento[i]=array [i] + 1;
  }
  return incremento;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var agregar= array;
  agregar.push(elemento);
  return agregar;


}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var comienzo= array;
  comienzo.unshift(elemento);
  return comienzo;

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase= "";
  for (var i= 0; i<palabras.length -1;i++){
    frase = frase + palabras[i] +" ";
  } 
  frase=frase + palabras[palabras.length -1];
  return frase;  
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
   var comparo =[];
   for (var i = 0; i < array.length; i++){
       if (array[i] != elemento){
         comparo= + array[i];
       }else return true;  
   }return false;
}   
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum= 0;
  for (var i = 0; i < numeros.length; i++){
    sum = sum + numeros[i];
  }
  return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  var prom = resultadosTest.length;
  for(var i = 0; i < resultadosTest.length ; i++){
    sum = sum + resultadosTest[i];
  }return sum/prom;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 var max= numeros[0];
 for (var i = 0; i < numeros.length ;i ++){
     if (numeros[i]> max){
       max = numeros[i];
     }
   
 }return max;
}
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length <1)return 0;
  var total = 1; 
  for(var i = 0; i < arguments.length;i++){
    total = total *arguments[i];
  
  }return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
