function convertirTemperatura() {

//Solicitar la temperatura en Celsius 
let temperaturaCelsius = 14;

//verificar si es tipo number o mandar error y solicitar datos nuevamente
if(isNaN(temperaturaCelsius)) {
    console.log("Error en los datos: Ingrese numero valido para la temperatura en Celsius");
    return;
}else {
    //convertir la temperatura en Farenheit y Kelvin
    let temperaturaFarenheit = (temperaturaCelsius * 9/5) + 32;
    
    let resultadoFarenheit = temperaturaFarenheit;
    
//imprimir los tatos conola 
console.log("Temperatura en grados Farenheit: " + resultadoFarenheit);



let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
let resultadoKelvin = temperaturaKelvin;
console.log("Temperatura en grados Kelvin: " + resultadoKelvin.toFixed(2));
}
    

}



convertirTemperatura();