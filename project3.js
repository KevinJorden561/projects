const celsius = 100

function convertToKelvin(cTemp) {
    const kelvin = cTemp + 273
    return kelvin
}

function convertToFahrenheit(cTemp) {
    const fahrenheit = cTemp * (9/ 5) + 32
    return fahrenheit
}

const fahrenheit = convertToFahrenheit(celsius)
const kelvin = convertToKelvin(celsius)

console.log(`The temperature is ${celsius} degrees celsius, ${fahrenheit} degrees fahrenheit, and ${kelvin} degrees kelvin.`)