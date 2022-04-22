const celsius = 100

function convertToKelvin() {
    const kelvin = celsius + 273
    return kelvin
}

function convertToFahrenheit() {
    const fahrenheit = celsius * (9/ 5) + 32
    return fahrenheit
}

const fahrenheit = convertToFahrenheit(celsius)
const kelvin = convertToKelvin(celsius)

console.log(`The temperature is ${celsius} degrees celsius, ${fahrenheit} degrees fahrenheit, and ${kelvin} degrees kelvin.`)