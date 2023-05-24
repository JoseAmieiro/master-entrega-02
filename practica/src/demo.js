console.log("-----------1. Biggest Word----------------")
/* 1. Biggest Word
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan 
muchas funciones de utilidad para el manejo y manipulación de strings.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
*/
const biggestWord = phrase => {
    const words = phrase.split(" ");
    let biggestWord = "";
    words.forEach(word => {
        if (word.length > biggestWord.length) {
            biggestWord = word;
        }
    });
        return biggestWord;
}
console.log(biggestWord("Hola, estamos buscando la palabra más larga y escoger la primera adelante"));

console.log("-----------2. Calificaciones----------------")
/* 2. Calificaciones
Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};
Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:
Matricula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4
function printAverage(classResults) {
  // Implementation here.
}
CONSEJO : Rompe en tantas funciones auxiliares como necesites.
TIP : Utilice el ejercicio "values" para extraer los valores de un objeto. 
En Array.prototypetambién cuentas con otro método que podría resultarte útil para transformar un array en un único valor.
*/
const eso2o = [
    David = 8.25,
    Maria = 9.5,
    Jose = 6.75,
    Juan = 5.5,
    Blanca = 7.75,
    Carmen = 8,
];

const calculateAverage = (classResults) => {
    const grades = Object.values(classResults);
    const average = grades.reduce((sum, student) => sum + student / grades.length, 0);
    return average;
  };
console.log(calculateAverage(eso2o));
  
const getQualification = (average) => {
    let qualification = "";
    switch (true) {
      case average === 10:
        qualification = 'Matrícula de Honor';
        break;
      case average >= 9:
        qualification = 'Sobresaliente';
        break;
      case average >= 7:
        qualification = 'Notable';
        break;
      case average >= 6:
        qualification = 'Bien';
        break;
      case average >= 5:
        qualification = 'Suficiente';
        break;
      case average >= 4:
        qualification = 'Insuficiente';
        break;
      default:
        qualification = 'Muy deficiente';
    }
    return qualification;
  };
const printAverageGrade = (classResults) => {
    const average = calculateAverage(classResults);
    const qualification = getQualification(average);
    return qualification;
  };
const qualification = printAverageGrade(eso2o);
console.log(`La clasificación promedio de la clase es ${qualification}.`);

console.log("-----------3. Check Arguments----------------")
/* 3. Check Arguments
Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de 
que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo 
equivalente pero más compacto y expresivo.
function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}
TIP: Piensa en el operador ternario y también en el operador OR.
TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. 
Es decir, no vas a recibir números, objetos, etc.
*/
const f = (input) => input === undefined ? "Unknown" : input || "";
console.log(f("Hello"));
console.log(f(""));
console.log(f(undefined));
console.log(f(null));

console.log("-----------4. Clone Merge----------------")

/* 4. Clone Merge
Apartado A
Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
  // Implementation here.
}
Apartado B
Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

TIP: Usa la función clone del apartado A.

function merge(source, target) {
  // Implementation here.
}
// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
*/
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function clone(source) {
    return Object.assign({}, source);
}
function merge(source, target) {
    const clonedSource = clone(source);
    return Object.assign(clonedSource, target);
}
console.log(merge(a, b));

console.log("-----------5. Deep Equal----------------")


/*  5. Deep Equal
Apartado A
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.
TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene o no una propiedad concreta. 
Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso contrario false.
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
console.log(user === clonedUser); // false
function isEqual(a, b) {
 ... // Implementation here
}
console.log(isEqual(user, clonedUser)); // true

Apartado B
Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.
TIP: Recuerda que el operador typeof en Javascript nos devuelve un string indicando el tipo de una variable
 de entre tipos primitivos, objetos o funciones. Ejemplo, typeof 12 // "number" o typeof {} // "object".
var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
function isDeepEqual(a, b) {
  ... // Implementation here

console.log(isDeepEqual(user, clonedUser)); // true
*/
console.log("APARATADO A");
// APARTADO A
const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };
console.log(user === clonedUser);
// const isEqual = (a, b) => a === b ? true : false;
function isEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (var prop in a) {
        if (a.hasOwnProperty(prop)) {
            if (!b.hasOwnProperty(prop)) {
                return false;
        }
            if (a[prop] !== b[prop]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isEqual(user, clonedUser));

console.log("APARATADO B");
// APARTADO B

const userB = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  
  const clonedUserB = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };

console.log(userB === clonedUserB);

function isDeepEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (var prop in a) {
        if (a.hasOwnProperty(prop)) {
            if (!b.hasOwnProperty(prop)) {
                return false;
            }
            var valueA = a[prop];
            var valueB = b[prop];
            if (typeof valueA === 'object' && typeof valueB === 'object') {
                if (!isDeepEqual(valueA, valueB)) {
                    return false;
                }
            } else { 
                if (valueA !== valueB) {
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(isDeepEqual(userB, clonedUserB));


console.log("-----------6. Dices----------------")

/* 6. Dices
Empleando el concepto de closure, emula el comportamiento de 2 dados.

Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula 
junto a estos datos, métodos que implementen la siguiente funcionalidad:

Hacer reset, poner a undefined o null ambos resultados.
Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
Imprimir el resultado por consola. Ten en cuenta lo siguiente:
Informa al usuario que debe tirar primero cuando corresponda.
Si saca doble 6, ¡dale un premio!
*/

const rollDice = () => {
    let dice1, dice2;
    const throwDice = () => {
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        printResult();
    } 
    const printResult = () => {
        if (dice1 === undefined || dice2 === undefined) {
          console.log("Debe tirar los dado primero.");
        } else {
          console.log(`Resultado: dado 1 ${dice1}, dado 2 ${dice2}`);
          if (dice1 === 6 && dice2 === 6) {
            console.log("¡Felicidades! Has sacado un doble 6.  ¡¡Ganas un premio!!")
          }
        }
    }
    const reset = () => {
      dice1 = undefined;
      dice2 = undefined;
      console.log(`Resultados reseteados`);
    }
    return {
      throwDice,
      reset,
    };
}

const playDice = rollDice();
playDice.throwDice();
playDice.reset();
playDice.throwDice();


console.log("-----------8. Includes----------------")

/*Includes

En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si un determinado 
valor figura entre los items de un array dado. Crea una función en ES5 con el mismo comportamiento, 
es decir, una función que reciba un array y un valor y devuelva un boolean indicando si el valor está dentro del array.

function includes(array, value) {
  // Implementation here
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
Challenge
El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que devuelve el índice de un elemento dado.

TIP: Consulta la documentación en MDN sobre los arrays:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/


function includes(array, value) {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

const includesChallenge = (array, value) => (array.indexOf(value) >=  0) ? true : false;
console.log(includesChallenge([1, 2, 3, 5], 7));
console.log(includesChallenge([1, 2, 3], 1));

console.log("-----------9. Includes----------------")

/*
Primes
Crea una función tal que, dado un número entero de inicio from y otro de fin to, 
encuentre los números primos entre ellos y los muestre por pantalla.

function showPrimes(from, to) {
  // Implementation here.
}
Asi pues, la salida desde el 1 al 10 sería:

1 is not a prime
2 is PRIME!
3 is PRIME!
4 is not a prime
5 is PRIME!
8 is not a prime
9 is not a prime
10 is not a prime
Utiliza la función para explorar todos los primos hasta el 100.

TIP: Puedes crearte una función auxiliar para saber si un número es primo o no, y utilizarla
 en tu función principal. Es buena práctica crear funciones auxiliares que hagan una sola cosa
  (principio de única responsabilidad).

Challenge
Se puede mejorar mucho el rendimiento del ejercicio anterior. Al buscar si un numero es primo, 
podemos dejar de comprobar si es divisible por cada entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.

TIP: Explora en la documentación todas las funciones matemáticas que nos ofrece JavaScript 
mediante el interfaz Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

function showPrimes(from, to) {
  for (let number = from; number <= to; number++) {
      if (isPrime(number)) {
        console.log(`${number} -> Es número primo!` )
      } else {
        console.log(`${number} -> NO es número primo!` )
      }
  }
}
function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  return true;
}

showPrimes(1, 10);

console.log("-----------10. Read Book----------------")


/*Read Book
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si 
se ha leído o no el libro. Un libro es un objeto con title como string y isRead como 
booleano. En caso de no existir el libro devolver false

TIP: Existe un método de los Arrays que te ayudará a buscar según un patrón: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

function isBookRead(books, titleToSearch) {
  // Implementation here
}
// Ejemplo:
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
*/
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books, titleToSearch) => {
    const foundBook = books.find(book => (book.title === titleToSearch))
    if (foundBook) {
        return titleToSearch + " is " + foundBook.isRead;
    } else {
      return  "Libro no encontrado " + false;
    }
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("-----------11. Reverse Text----------------")


/* Reverse Text
Dado un texto cualquiera, invierte el orden de las palabras.

TIP: Se hace en 1 sola línea.

Ejemplo: "Uno dos tres" --> "tres dos Uno"
TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

function reverseText(text) {
  // Implementation here.
}
*/

const reverseText = text => text.split(" ").reverse().join(" ");

console.log(reverseText("Uno dos tres"));


console.log("-----------12. Subsets----------------")

/* Subsets
Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

function subsets(word) {
  // Implementation here
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
Challenge
Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.
*/

function subsets(word) {
    const result = [];
    for (let index = 1; index < word.length; index++) {
        result.push(word.slice(index));
    }
    return result;
}

console.log(subsets("murcielago"));

