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


console.log("-----------1. Biggest Word----------------")
