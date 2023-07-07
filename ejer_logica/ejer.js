/*
Ejercicio de suma de números pares:
Escribe un programa que sume todos los números pares del 1 al 100.
 */

function sum_pares(){
    let suma = 0;
    for (let i = 0; i <= 100; i += 2){
        suma += i;
    }
    return suma;
};

/*
    Ejercicio de números primos:
    Escribe una función que determine si un número dado es primo o no.
*/

function es_primo(num) {
    // primero verifico que 'num' sea mayor a 1 y no este vacio
    if (num <= 1 || num === undefined) {
        return `El Nº${num} No es primo`;
    };
    // luego itero de i hasta 'num' y le doy a i como valo inicial 2
    for (let i = 2; i < num; i++) {
        // adentro del for verifico que 'num' sea divisible por otros numeros que no sean por si mismo o 1
        if (num % i === 0) {
            return `El Nº${num} No es primo`; // y retorno que no es primo
        };
    };
    // si no entra en ninguna de las anteriores verificaciones, por lo tanto es Primo!!
    return `El Nº${num} es primo!!`
};




/*
    Ejercicio de ordenamiento:
    Implementa un algoritmo de ordenamiento,
    como el ordenamiento de burbuja o el ordenamiento rápido (quicksort).
*/

function ordenamiento_burbuja(lista) {
    // bucle externo i, recorre la lista de 0 hasta el penultimo elemento de la lista
  for (let i = 0; i <= lista.length -1; i++) {
    //console.log(`ES I: ${i}`)
    // bucle interno j, recorre la lista de 0 hasta el penultipo elemento de la lista no ordenada
    for (let j = 0; j <= lista.length - i; j++) {

        // guarda el valor del elemento actual en una variable auxiliar
        aux = lista[j];
        // si la posicion actual de la lista es mayor a la siguiente posicion, entonces se reemplazan las posiciones
        // y lista en la posicion j + 1 pasa a ser el valor de la variable auxiliar que valia la primer posicion
        // y asi sucecivamente hasta terminar la longitud de la lista
        // donde el mayor numero ocupa la ultima posicion de la lista
        // todo esto se repite hasta que se termine de recorrer el bucle externo y luego el interno
        if (lista[j] > lista[j +1]) {
            lista[j] = lista[j +1];
            lista[j +1] = aux;
        };
        //console.log(`Es J: ${lista[j]} > ${lista[j +1]} entoces lista[j] ahora vale ${lista[j +1]} y lista[j +1] vale ${aux}`);
        //console.log(lista)
    }
  };
  return lista;
}




/*
    Ejercicio de inversión de cadena:
    Escribe una función que invierta una cadena de texto.
    Por ejemplo, "Hola, mundo" se convertiría en "odnum ,aloH".
*/




/*
    Ejercicio de palíndromos:
    Escribe una función que determine si una palabra o frase es un palíndromo.
    Un palíndromo es una palabra o frase que se lee igual de adelante hacia atrás.
*/





/*
    Ejercicio de Fibonacci:
    Escribe una función que genere los primeros n números de la secuencia de Fibonacci.
*/





/*
    Ejercicio de recursividad:
    Implementa una función recursiva para calcular el factorial de un número.
*/




/*
    Ejercicio de búsqueda binaria:
    Implementa una función de búsqueda binaria para encontrar un elemento en una lista ordenada.
*/





/*
    Ejercicio de anagramas:
    Escribe una función que determine si dos cadenas son anagramas,
    es decir, si contienen las mismas letras pero en un orden diferente.
*/





/*
    Ejercicio de juego de la vida:
    Implementa el "Juego de la vida" de Conway,
    un autómata celular que simula la evolución de células en una cuadrícula.
*/


function main () {
    console.log(sum_pares());
    console.log(es_primo(5));
    console.log(ordenamiento_burbuja([5, 1, 4, 3, 18, 24, 21, 100, 85]))

};

main()

