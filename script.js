let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, corporis?"

const myArray = str.split('')
const vowelsArr = []
const constantsArr = []
let vowels = 0
let constants = 0

for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    if (element == 'a' || element == 'u' || element == 'e' || element == 'o' || element == 'i') { 
        vowels++
        vowelsArr.push(element)
     }
    else if (element !== ',' && element !== '.' && element !== '?' && element !== '?' && element !== ' ') {
        constants++
        constantsArr.push(element)
    }

}

console.log(`undoshlar ${constants}, unlilar ${vowels}`);

console.log("Undoshlar:");
console.log(constantsArr);
console.log("Unlilar:");
console.log(vowelsArr);