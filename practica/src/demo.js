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

console.log("-----------4. Deep Equal----------------")


/*  4. Deep Equal
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
  