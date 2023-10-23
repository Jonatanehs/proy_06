//se hace una constante con nombre math

const { bgMagenta } = require("colors");

const math = {};

//se hace una constatnte con nombre invertirNumero de paso haciendo una funcion flecha

const invertirNumero = numero => { 

//se hace una variable con nombre invertido    

    let invertido = 0;

// se crea un while que se repite hasta que el numero sea igual a 0
    
    while (numero !=0){

// se llama la variable invertido que es igual a que el numero de igual a 0

        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10)) //math.floor redondea un numero decimal a entero
    }

// se retorna el invertido

    return invertido
};

//se hace una constante con nombre invertirNumeroComoTexto se hace una funcion flecha

const invertirNumeroComoTexto = numero => {

/*se hace una constante que tiene como nombre "numeroInvertidoComoTexto" que es igual a
el numero que se convierte en toString que es una cadena
el ".split" divide la cadena, el ".reverse " invierte el orden y finalmente el
". join" los junta en una sola caena */

    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");

//retorna la constante llamada "numeroInvertidoComoTexto"
    return numeroInvertidoComoTexto;
};

// se hace una nueva conastante llamada invertirTexto y a esta se le hace una  funcion flecha
const invertirTexto = texto => {

//se crea una constante la cual es igual al texto que se convierte en arreglo
    const splitText = texto.split('');

/*se hace una nueva constante con nombre "reversedText" que es igual a la anterior constante
y invierte el orden*/
    const reversedText = splitText.reverse();

/*se crea otra constante con nombre "joinedText" que es igual a la anterior constante,  pero
esta vez junta la cadena*/
    const joinedText = reversedText.join('');

//se retorna el valor de la constante joinedText
    return joinedText;
};

//se crea una nueva constante con nombre "invertirArreglo" haciendola funcion flecha 
const invertirArreglo = arreglo => {

//se crea una nueva constante llamada "reverseObject" que es igual a invertir el orden del arreglo
    const reverseObject = arreglo.reverse();

//se retorna la constante reverseObject
    return reverseObject;
};

//se hace una constante llamada "conversionDatos" haciendola funcion flecha
const conversionDatos = data => {

/*se crea una variable llamada "dataType" que igual  "typeOf" determina el tipo 
de los valores de data*/
    let dataType = typeof data;

//se crea una variable denominada dataVar
    let dataVar;

/*es una condicion que dicta que si el valor de data es nulo, no esta definido o si data
tiene los 2 valores iguales y añadir los "===" se vuelven mas estrictas*/
    if(data === '' || data === null || data === undefined || data.length === 0) {

//si lo anterior se cumple imprimira el mensaje 'El valor ingresado esta vacio o incorrecto'
        dataVar = 'El valor ingresado esta vacio o incorrecto';

//si esto no se cumple imprimira en la consola un mensaje con interpolacion
    }else {
        console.log(`++`.yellow + `El valor ingresado es de tipo: `.cyan + 
                    `${dataType}`.bgYellow + `, con un valor de:`.cyan + 
                    ` ${data}`.bgGreen + `                             ++`.red);
        
 //switch hace una declaracion de cada caso       
        switch(dataType){

//el case es de type number, el dataVar llama a "invertirNumero" y break termina el bucle
            case 'number':
                dataVar = invertirNumero(data);
                break;

//el case es de type string, el dataVar llama a "invertirTexto" y break termina el bucle
            case 'string':
                dataVar = invertirTexto(data);
                break;

//el case es de type object, el dataVar llama a "invertirArreglo" y break termina el bucle
            case 'object':
                dataVar = invertirArreglo(data);
                break;

//en el caso de que no se verifique los anteriores casos imprima un mensaje
            default:
                dataVar = 'El valor ingresado no se puede invertir';
        }
    }

//Se retorna el dataVar de las anteriores declaraciones
    return dataVar;
    }

//se le asignan las funciones para exportarlas
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

//se exporta todo lo que contenga el modulo math
module.exports = math;