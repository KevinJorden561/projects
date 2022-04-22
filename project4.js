const array = ['Todd', 'Daire', 'John', 'Zach', 'Manny']
const name = 'Tod'

function checkArr(arrayOfNames, targetName) {
    return arrayOfNames.includes(targetName)  
}

console.log(checkArr(array, name))

