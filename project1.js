const usDollar = 100
const rate = .93


function currencyConverter(usDollar, rate) {
    const euro = usDollar * rate
    return euro
}

const euro = currencyConverter(usDollar, rate)

console.log("There's " + euro + " euro's in " + usDollar + " US dollar")