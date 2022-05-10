// Data Types


// Numbers = 123
// Boolean = true or false
// String = "String"


console.log(typeof(23))
console.log("Hi")

// Prompt 

// const name = prompt("what is your name?");
// console.log(name)

// Switch variable exercise

let a = 8
let b = 3

console.log("A equals " + a)
console.log("B equals " + b)
// chaning the values with using c as a placeholder 
let c = b
b = a
a = c
// checking to see the results
console.log("A equals " + a)
console.log("B equals " + b)

// Strings

// Concatenation
 
// let firstWord = "Hello "
// let secondWord = prompt("What is your name?")
// let greeting = alert(firstWord + secondWord)

// String lengths and Retrieving Number of Characters 

// let name = "Steve";
// // Using curly brackets you need to use a forward ` and the $ sign to concatenate. 
// console.log(`The length of Steve's name is ${name.length}.`);

// let charactersWritten = prompt("Write some stuff here.")
// let charactersLeft = 280 - charactersWritten.length
// alert(`You have ${charactersLeft} characters remaining.`)

// // Slicing and Extracting Parts of a String
// let myName = "Steve";
// name.slice(0,1)
// console.log(name)

// // When you slice it slice from the first number but not including the second number. 

// let characterBlock = prompt("Write a message");
// characterBlock.toUpperCase()
// alert(characterBlock.slice(0,140));

// Changing the case of your strings
// toUpperCase()

// let whatIsYourName = prompt("What is your name?")
// alert(`Your name is ${whatIsYourName.slice(0,1).toUpperCase()}${whatIsYourName.slice(1,whatIsYourName.length).toLowerCase()}`)

// Basic Arithmetic and the Modulo Operator in Javascript 
let modulo = 9 % 6;
console.log(modulo)
// 6 goes into 9 only one time; modulo measures the remainder

// Increment and Decrement Expressions in JS

let x = 5;
x = x + 1
// longhand of writing it out 
console.log(x)

let z = 5;
z++;
// shorthand incrementing
console.log(z)
z--;
// shorthand decrementing
z--;
console.log(z)

let q = 5;
let r = 3;
q += r;

console.log(q + " is the value of q")
console.log(r + " is the value of r")

var s = 3
console.log(s)
var t = ++s;
// if the expression is written var t = ++s
// then s will increment by 1 before and t will equal 4 and s will also equal 4. 
// but if the expression is written var t = s++
// then s will increment by 1 after the assignement is given to t. 
// this is a good example of prefix and postfix. 
// prefix will run the increment or decrement before the value is assigned
// postfix will run the increment or decrement after the value is assigned
console.log(t + " is the value of t")
console.log(s + " is the value of s")
t += 1;
console.log(t + " is the value of t")

console.log("---------functions--------")

// Functions
// Creating the function
// function getMilk(bottles) {
//     console.log("Getting milk")
//     let cost = bottles * 1.5;
//     console.log("This is the cost: $" + cost + ", because " + bottles + " bottles were purchased.")
// }
// // Call the function 
// getMilk(3);


// function buyMilk(money) {
//     let budget = Math.floor(money/1.5)
//     let remainder = money % 1.5 
//     console.log("With my " + money + " dollars, I was able to buy " + budget + " bottles. With " + remainder + " amount of money left over. ")
//     return Math.floor(money/1.5)  
// } 

// let budget = buyMilk(5)
// console.log(budget)

console.log("--------Budget Example---------")

function myBudget(income) {

    console.log("Budget is working")
    let moneyAfterGas = income - 235
    let moneyAfterHousing = moneyAfterGas - 600
    console.log("This is the money after gas " + moneyAfterGas + ". This is the money after housing " + moneyAfterHousing)

    return {
        first: moneyAfterGas,
        second: moneyAfterHousing
    }


}

let bigMondyBudget = myBudget(10000)

let gas = bigMondyBudget.first 
console.log(gas)

let housing = bigMondyBudget.second
console.log(housing)


console.log("-----high order functions-----")
// Write a function that when executed calls another function. 
// First I will write a function that will return the left over amount of money I have from buying milk.
// Then in this function it will call a function that will tell me how many bottles I purchased. 

let buyMilk = (money, costPerBottle) => {

    console.log("Buying milk")
    calculateBottles(money, costPerBottle)
    return calcChange(money, costPerBottle)
}


let calculateBottles = (startingMoney, costPerBottle) => {
    let quantityPurchased = Math.floor(startingMoney / costPerBottle)
    console.log(`I purchased ${quantityPurchased} of bottles`)
    return quantityPurchased
}


let calcChange = (startingAmount, costOfBottle) => {
    let change = startingAmount % costOfBottle
    return change 
}

let moneyLeftOver = buyMilk(3, 1.5)
console.log(`This is how much money I have left ${moneyLeftOver}`)

// BMI Challenge
// BMI = weight (in kg) / height (squared) (in meters)
// Create a funciton that takes the weight and the height as inputs
// Output is going to be equal to the BMI. 
console.log("-----bmi challenge-----")


function bmiCalculator(weight, height) {
    let bmiEquation = weight / (height * height)
    return bmiEquation    
}

let bmi = bmiCalculator(77, 1.82)
console.log(bmi)


