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
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    };
    /*
        Es importante tener en cuenta que la recursividad requiere un caso base
        (en este caso, n === 0) que detenga la recursión y evite un bucle infinito.
        Además, es fundamental que en cada llamada recursiva se acerque al caso base
        para garantizar que la recursión se complete correctamente.
        Veamos un ejemplo con el número 4 para entender mejor el proceso:

        Llamada inicial: factorial(4)
        4 no es igual a 0, por lo que se ejecuta la parte else de la declaración condicional.
        Se realiza una llamada recursiva a factorial(3) y se espera su resultado.
        3 no es igual a 0, por lo que se ejecuta la parte else de la declaración condicional.
        Se realiza una llamada recursiva a factorial(2) y se espera su resultado.
        2 no es igual a 0, por lo que se ejecuta la parte else de la declaración condicional.
        Se realiza una llamada recursiva a factorial(1) y se espera su resultado.
        1 no es igual a 0, por lo que se ejecuta la parte else de la declaración condicional.
        Se realiza una llamada recursiva a factorial(0) y se espera su resultado.
        0 es igual a 0, por lo que se alcanza el caso base.
        Se devuelve 1 desde la llamada factorial(0).
        Ahora, las llamadas recursivas empiezan a resolverse en reversa:

        El resultado de factorial(0) es 1. Por lo tanto, factorial(1) se evalúa como 1 * 1, lo cual es 1.
        El resultado de factorial(1) es 1. Por lo tanto, factorial(2) se evalúa como 2 * 1, lo cual es 2.
        El resultado de factorial(2) es 2. Por lo tanto, factorial(3) se evalúa como 3 * 2, lo cual es 6.
        El resultado de factorial(3) es 6. Por lo tanto, factorial(4) se evalúa como 4 * 6, lo cual es 24.
        Finalmente, el resultado final de la llamada inicial factorial(4) es 24, que es el factorial de 4.
    */
};

function factorial2(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}




/*
    Ejercicio de búsqueda binaria:
    Implementa una función de búsqueda binaria para encontrar un elemento en una lista ordenada.
*/

function busqueda_binaria(lista, x) {
    let low = 0;
    let high = lista.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // redondeo la ubicación de la mitad de la lista

        if (lista[mid] === x) {
            return true; // El elemento se encontró en la lista
        } else if (lista[mid] < x) {
            low = mid + 1; // El elemento buscado está en la mitad superior
        } else {
            high = mid - 1; // El elemento buscado está en la mitad inferior
        }
    }

    return false; // El elemento no se encontró en la lista
}

function busqueda(lista, x) {
    return lista.filter(el => el === x);
}



/*
    Ejercicio de anagramas:
    Escribe una función que determine si dos cadenas son anagramas,
    es decir, si contienen las mismas letras pero en un orden diferente.
*/

function anagramas(txt1, txt2) {
    // Eliminar espacios en blanco y convertir a minúsculas
    txt1 = txt1.replace(/\s/g, '').toLowerCase();
    txt2 = txt2.replace(/\s/g, '').toLowerCase();

    // Verificar si las cadenas tienen la misma longitud
    if (txt1.length !== txt2.length) {
        return false;
    };

    // convierto las cadenas en array, las ordeno y las vuelvo a convertir en una cadena
    txt1 = txt1.split('').sort().join('');
    txt2 = txt2.split('').sort().join('');

    // por ultimo devuelvo true si son iguales o false si no
    return txt1 === txt2;

}



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
    console.log(busqueda_binaria(ordenamiento_quicksort([5, 1, 4, 3, 18, 24, 21, 100, 85]), 2));
    console.log(busqueda([5, 1, 4, 3, 18, 24, 21, 100, 85], 4))
    console.log(factorial(4));
    console.log(factorial2(4));
    console.log(anagramas('mono', 'nomo'));
};

main();

