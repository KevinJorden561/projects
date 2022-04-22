const fahrenheit = 90

function convertTemp(fTemp) {
    const celsius = (fTemp - 32) * 5 / 9
    return celsius
}

const celsius = convertTemp(fahrenheit)

console.log(celsius)