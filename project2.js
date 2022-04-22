const fahrenheit = 90

function convertTemp() {
    const celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

const celsius = convertTemp(fahrenheit)

console.log(celsius)