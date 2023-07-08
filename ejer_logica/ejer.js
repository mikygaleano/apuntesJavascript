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
    for (let j = 0; j <= lista.length - i - 1; j++) {

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
};

function ordenamiento_quicksort(lista) {
    if (lista <= 1) return lista; // si la lista es menor a 1 elemento o tiene un elemento, entonces ya esta ordenada
    else {
        const pivote = lista[0]; // le asignamos al pivote el valor del primer elemento de la lista
        const menores = []; // lista donde se van a agregar los elementos menores al pivote
        const mayores = []; // lista donde se van a agregar los elementos mayores al pivote

        for (let i = 1; i < lista.length; i++) {
            if (lista[i] < pivote) {
                menores.push(lista[i]); // agregamos a menores si lista[i] es menor al pivote
            } else {
                mayores.push(lista[i]); // agregamos a mayores si lista[i] es mayor al pivote
            };
        };

        // aplicamos recursividad para ordenar las sublistas menores y mayores
        const subMenores = ordenamiento_quicksort(menores);
        const subMayores = ordenamiento_quicksort(mayores);

        // combinamos las sublistas ordenadas junto con el pivote en el medio
        return subMenores.concat(pivote, subMayores);

    };
};

function ordenamiento3(lista) {
    return lista.sort((a, b) => a - b)
}

/*
    Ejercicio de inversión de cadena:
    Escribe una función que invierta una cadena de texto.
    Por ejemplo, "Hola, mundo" se convertiría en "odnum ,aloH".
*/

function invertir_cadena(cadena) {
    return cadena.split('').reverse().join('');
};

function invertir_cadena2(cadena) {
    let invertir = '';
    let separar = cadena.split('');
    for (let i = 0; i < separar.length; i++) {
        invertir += separar[separar.length - 1 - i]
    }
    return invertir;
}


/*
    Ejercicio de palíndromos:
    Escribe una función que determine si una palabra o frase es un palíndromo.
    Un palíndromo es una palabra o frase que se lee igual de adelante hacia atrás.
*/

function palindromo(txt) {
    return txt === invertir_cadena(txt)?
                    `La palabra ${txt} Si es palindromo!! ${invertir_cadena(txt)}`:
                    `La palabra ${txt} No es palindromo`;
};




/*
    Ejercicio de Fibonacci:
    Escribe una función que genere los primeros n números de la secuencia de Fibonacci.
*/

function fibonacci(n) {
    // Verificar si n es válido
    if (n <= 0) {
      return [];
    }
  
    // Casos base
    let fibSeq = [0];
    if (n === 1) {
      return fibSeq;
    }
  
    fibSeq = [0, 1];
    if (n === 2) {
      return fibSeq;
    }
  
    // Generar la secuencia de Fibonacci
    while (fibSeq.length < n) {
        const nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(nextNum);
    }
    console.log('Fibonacci: =>>>>>>>>>')
    return fibSeq;
  }



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
    console.log(ordenamiento_burbuja([5, 1, 4, 3, 18, 24, 21, 100, 85]));
    console.log(ordenamiento_quicksort(['a', 'c', 'z', 'b']));
    console.log(ordenamiento3([10, 8, 12, 15, 5, 3]))
    console.log(invertir_cadena('Hola mundo!!'));
    console.log(invertir_cadena2('Hola mundo!!'));
    console.log(palindromo('Hola'));
    console.log(fibonacci(100));
};

main();

