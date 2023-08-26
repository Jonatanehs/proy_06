//se hace un requiere que llama al paquete de colores de node js
require ('colors');

//se hace una constante math que llama todo lo que tenga el codigo .js
const math = require('./proy_modules/math.js')

//se hace una constante llamada main que es asincrona y se le agrega funcion flecha
const main = async () => {

//se imprime un mensaje en la consola resaltandola en rojo
    console.log('hola SENA CBA\n'.bgRed);

    console.log("//////////////////////////////////////////////////////////////////".blue +
            "///////////////////////////////////".blue);

/*se hace una constante numeros que tiene un arreglo de diversos numeros
los arreglos son aquellos que tienen la capacidad de guardar diferentes datos*/
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];

/*for es un bucle que se repite un determinado numero de veces
en este caso ese for tiene una constante donde numero se repite hasta que numeros de falso*/
    for (const numero of numeros){

//se hace una constante con nombre "invertidoComoNumero" que es igual a lo exportado de math.js
        const invertidoComoNumero = math.invertirNumero(numero);

//se crea una constante llamada "invertidoComoCadena" que es igual a lo exportado de math.js
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);

/*en la consola se impimira 2 plus para imprimir un diseño de color azul concatenado
con un mensaje y el simbolo "%s" que son marcadores de posicion del contenido de las variables
al finalizar se llaman todas las variables*/
        console.log("++".blue + "El numero '%s' es '%s' invertidocomo numero, y '%s' como cadena".yellow,
        numero, invertidoComoNumero, invertidoComoCadena );
    }

//se cre auna constante llamada textos que incluye en ella arreglos
    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y desarrollo de software']

//for es un bucle que se repite hasta que textos de falso
    for(const texto of textos){

//se crea una constante con nombre "textoInvertido" que importa lo exportado de math.js
        const textoInvertido = math.invertirTexto(texto);

/*se imprime en la consola 2 plus de color cyan para dar un poco de diseño,
se concatena un mensaje que tiene dentro marcadores de  posicion*/
        console.log("++".cyan + "El texto %s se invierte como '%s'", texto, textoInvertido);
    }
// se crea una constante llamada datos que tiene en su interior un arreglo
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'.blue]]
   
//for es un bucle que tiene dentro que el dato se repite hasta que datos de falso 
    for(let dato of datos){

//se crea una constante nombrada "datoConvertido" que tiene dentro lo exportado de math
        const datoConvertido = math.conversionDatos(dato);

/* se imprime en la consola un diseño con dos plus de color verde y interpola las varables
"datoConvertido" y al final se le agrega otro diseño*/
        console.log("++".green + `El resultado de conversion es : ${datoConvertido}` 
        + "                                                     ++".green);
    }

//se imprime en la consala con slash para dar diseño de color amarillo
    console.log("//////////////////////////////////////////////////////////////////".yellow +
            "///////////////////////////////////".yellow);
}

//se llama a main para cerrar y terminar los procesos que contenga main
main();