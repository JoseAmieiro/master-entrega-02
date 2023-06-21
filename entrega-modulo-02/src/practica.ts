console.log("-----------1. Biggest Word----------------")
/* 1. Biggest Word
Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
En caso de haber varias con longitud máxima que devuelva siempre la primera. 
Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan 
muchas funciones de utilidad para el manejo y manipulación de strings.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
*/
const biggestWord = (phrase: string): string => {
    const words: string[] = phrase.split(" ");
    let biggestWord: string = "";
    words.forEach((word: string) => {
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
Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el 
sistema de calificación español:
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
const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const calculateAverage = (classResults: { [key: string]: number }): number => {
    const grades = Object.values(classResults);
    const average = grades.reduce((sum, student) => sum + student / grades.length, 0);
    return average;
  };
console.log(calculateAverage(eso2o));
  
const getQualification = (average: number): string => {
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
const printAverageGrade = (classResults: { [key: string]: number }): string => {
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
const f = (input: string | undefined | null): string => input === undefined ? "Unknown" : input || "";
console.log(f("Hello"));
console.log(f(""));
console.log(f(undefined));
console.log(f(null));



console.log("-----------5. Deep Equal----------------")


/*  5. Deep Equal
Apartado A
Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare 
el contenido de 2 objetos.
TIP: Recuerda, los objetos tienen un método hasOwnProperty que nos indica si dicho objeto tiene 
o no una propiedad concreta. 
Ejemplo a.hasOwnProperty("name"), si a tiene una propiedad name nos devolverá true, en caso 
contrario false.

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
console.log("APARTADO A");
// APARTADO A
const user: { name: string; age: number } = { name: "María", age: 30 };
const clonedUser: { name: string; age: number } = { name: "María", age: 30 };
console.log(user === clonedUser);

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
    let dice1: any,  dice2: any;
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
El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que devuelve el índice de un 
elemento dado.

TIP: Consulta la documentación en MDN sobre los arrays:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/


function includes(array: number[], value: number): boolean {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

const includesChallenge = (array: number[], value: number): boolean => (array.indexOf(value) >=  0) ? true : false;
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

function showPrimes(from: number, to: number): void {
  for (let number = from; number <= to; number++) {
      if (isPrime(number)) {
        console.log(`${number} -> Es número primo!` )
      } else {
        console.log(`${number} -> NO es número primo!` )
      }
  }
}
function isPrime(number: number): boolean {
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

function subsets(word: string): string[] {
    const result: string[] = [];
    for (let i = 1; i < word.length; i++) {
        result.push(word.slice(i));
    }
    return result;
}

const subsetsPremium = (word: string): string[] => word.length <= 1 ? [] : [word.slice(1), ...subsets(word.slice(1))];
console.log(subsets("murcielago"));
console.log(subsetsPremium("murcielago"));


console.log("-----------12. This----------------")


/*This
¿Cual es la salida de los logs en el siguiente código? Intenta razonar, 
no te limites a ejecutar la solución.
*/

var surname: string = "Pérez";

interface PersonThis {
  name: string;
  surname: string;
  wife: {
    name: string;
    surname: string;
    getSurname: () => string;
  }
}


var person: PersonThis = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // Jimenez; surname esta en el ámbito wife
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // Perez; surname esta en el ámbito golbal, objeto window
console.log(surnameFunction.call(person)); // Gonzalez; surname esta en el ámbito person


console.log("-----------13. Values----------------")

/*Values
Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

function values(obj) {
  // Implementation here
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));
 // [31, 310, "long video", "mp4"]
Challenge
Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de: 
["John"; function() { console.log("I'm walking"); }]

*/

function values(obj: Record<string, unknown>): unknown[]  {
  const result: unknown[] = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));

function Persona(name: string): void {
  this.name = name;
}

Persona.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Persona("John");
console.log(values(john));


console.log("-----------14. Zip----------------")

/*Zip
Crea una función zipObject tal que acepte un array de claves como primer argumento y un 
array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las 
claves con sus valores. Asumir que el array de claves tiene como mínimo la misma longitud 
que el de valores:

function zipObject(keys, values) {
  // Implementation here
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); 
// {spanish: "hola", english: "hi", french: "salut"}

Challenge
Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.

// Ejemplo:
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

*/

function zipObject(keys: string[], values: unknown[]): { [key: string]: unknown } {
  const obj: { [key: string]: unknown } = {};
  for (let i = 0; i < keys.length; i++) {
    if (i < values.length) {
      obj[keys[i]] = values[i];
    } else {
      break;
    }
  }
  return obj;
}

console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"]));

console.log(zipObject(["spanish", "english", "french"], ["hola"]));



console.log("-----------15. ZZCrypt----------------")

/* ZZCrypt
// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' 
  ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  // Implementation here.
}

*/

function decrypt(secret: string): string {
  var plain: string = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
  var cipher: string = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
  var result: string = "";
  for (var i = 0; i < secret.length; i++) {
    var index: number = cipher.indexOf(secret[i]);
    if (index !== -1) {
      result += plain[index];
    } else {
      result += secret[i];
    }
  }
  return result;
}

var secret: string = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

console.log(decrypt(secret))


console.log("-----------201. Args----------------")

/*Args
Dada la siguiente función:

function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}
Apartado A
¿Qué muestra por consola esta llamada?

f("JS rocks!", { b: "b" });
Apartado B
¿Y con estos argumentos?

f({ b: "b" });
Apartado C
¿Y ahora?

f("JS sucks!", null, 13);
*/

// function func(a, { b } = {}, c = 100) {
//   console.log(arguments.length);
//   console.log(a, a === arguments[0]);
//   console.log(b, b === arguments[1]);
//   console.log(c, c === arguments[2]);
// }
// console.log("Apartado A");
// func("JS rocks!", { b: "b" });
// console.log("Apartado B");
// func({ b: "b" });
// console.log("Apartado C");
// func("JS sucks!", null, 13);





 console.log("-----------204. Console/B----------------")


/*Console

Apartado B
Sin tocar ninguno de los console.log anteriores, modifica ligeramente el 
código para que muestre la siguiente secuencia:
1 3
1 3
1 2
5
5 6
1 2
*/

var aa: number = 1;
let bb: number = 2;

{
  let bb: number = 3;
  try {
    console.log(aa, bb);
  } catch (error) {}
  
  console.log(aa, bb);
}

console.log(aa, bb);

const cons = (): void => {
  var aa: number = 5;
  console.log(aa);
  let bb: number = 6;
  console.log(aa, bb);
};
cons();

console.log(aa, bb);


console.log("-----------205. Fibonacci----------------")

/*Fibonacci
Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:

fib(0) = 0
fib(1) = 1
Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:

fib(2) = fib(1) + fib(0)
...
fib(n + 1) = fib(n) + fib(n - 1)
TIP: Es el clásico problema donde el término siguiente depende del actual y el anterior.

TIP: También se puede abordar con recursividad, pero buscamos una solución iterativa para hacer uso de destructuring con múltiples asignaciones.

const fib = n => {
  ...
};
*/

const fib = (n: number): number => {
  let a: number = 0;
  let b: number = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

console.log(fib(6));

console.log("-----------206. Players Order----------------")


/*Players Order
En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador 
actual ha consumido su turno, pasa al final de la cola y le toca al siguiente. Dada 
una lista inicial de jugadores, implementa una función que devuelva la nueva lista de jugadores, 
en el orden correcto, después de X turnos.

TIP: Aunque se puede resolver con el operador %, intenta idear una solución usando spread/rest y destructuring.

const getPlayersOrder = (players, turns) => {
   Implementation here 
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
*/

const getPlayersOrder = (players: string[], turns: number): string[] => {
  let updatedPlayers: string[] = [...players];
  for(let i = 0; i < turns; i++) {
    const [currentPlayer, ...restPlayers] = updatedPlayers;
    updatedPlayers = [...restPlayers, currentPlayer];
  }
  return updatedPlayers;
};

console.log(getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2));

console.log("-----------207. Reminder----------------");
console.log("El resultado sale al final de la consola pasados 3 segundos");


/*Reminder
El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, 
lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function() {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}
Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras 
y añade unos pocos segundos de retardo. Comprueba la salida por consola ... algo no funciona como 
esperábamos ¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?
*/

class Reminder {
  private text: string;
  constructor(text) {
    this.text = text;
  }

  remindMe(delay: number) : void {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder = new Reminder("Las arrow function capturan el contexto léxico y mantienen el valor del this.");
reminder.remindMe(3);


console.log("-----------209. Swap----------------")

/*Swap
¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?

let a = "A";
let b = "B";

// Implementation here, one line, one shot!

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
*/


let a1: string = "A";
let b1: string ="B";

[a1, b1] = [b1, a1];
console.log(a1 === "B" && b1 === "A" ? "You did it!" : "Keep trying!");

console.log("-----------209. Califications Summary---------------")


/*Califications Summary
Utilizando TypeScript escribe una función que reciba una lista de estudiantes 
(que tienen nombre y una lista de notas) y devuelva otra lista donde por cada 
estudiante devuelva su nombre, su nota más alta y la media de sus notas.

Crea para ello dos entidades, una para representar al estudiante (Student) y 
otra para representar su nombre, nota más alta y media de notas (StudentSummary).

No se permite el uso de clases. En caso de usar funciones auxiliares típalas. 
Puedes usar la función Number.prototype.toPrecision(3) para reducir el número 
de decimales de la media de calificaciones a tres números.

const students = [
  { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
  { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
  { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
  { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
  { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];

const summarizeClassRoom = studentList => {
  // Implementation here
};

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]

*/

const students = [
  { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
  { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
  { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
  { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
  { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];

const summarizeClassRoom = studentList => {
  // Implementation here
};
