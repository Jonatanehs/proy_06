require ('colors');

const math = require('./proy_modules/math.js')

const main = async () => {

    console.log('hola SENA CBA\n'.bgRed);

    console.log("//////////////////////////////////////////////////////////////////".blue +
            "///////////////////////////////////".blue);
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for (const numero of numeros){
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        console.log("++".blue + "El numero '%s' es '%s' invertidocomo numero, y '%s' como cadena".yellow,
        numero, invertidoComoNumero, invertidoComoCadena );
    }

    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y desarrollo de software']
    for(const texto of textos){
        const textoInvertido = math.invertirTexto(texto);
        console.log("++".cyan + "El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }

    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'.blue]]
    for(let dato of datos){
        const datoConvertido = math.conversionDatos(dato);
        console.log("++".green + `El resultado de conversion es : ${datoConvertido}` 
        + "                                                     ++".green);
    }
    console.log("//////////////////////////////////////////////////////////////////".yellow +
            "///////////////////////////////////".yellow);
}

main();