
//obtener los datos con input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    
        
    
     function convertirTemperatura() {
     rl.question("Escriba una temperatura en celcius: ", (temperaturaCelsius) => {
    //Solicitar la temperatura en Celsius 
    
    
    //verificar si es tipo number o mandar error y solicitar datos nuevamente
    if(isNaN(temperaturaCelsius)) {
        console.log("Error en los datos: Ingrese numero valido para la temperatura en Celsius");
        rl.close();
        return;
    }else {
        //convertir la temperatura en Farenheit y Kelvin
        let temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
        
        let resultadoFarenheit = temperaturaFarenheit;
        
    //imprimir los tatos conola 
    console.log("Temperatura en grados Farenheit: " + resultadoFarenheit(2));
    
    
    
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
    let resultadoKelvin = temperaturaKelvin;
    console.log("Temperatura en grados Kelvin: " + resultadoKelvin.toFixed(2));
    }
    rl.close();    
    });
}



convertirTemperatura();