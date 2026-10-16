// Add string
const firstName = "Md. Saimur "
const lastName = "Rahman"
const fullName = firstName + lastName
console.log(fullName)
console.log(typeof fullName)

// Add number
const phyMarks = 90
const chemMarks = 88
const totalMarks = phyMarks + chemMarks
console.log(totalMarks)
console.log(typeof totalMarks)

// Add number+string
const item1 = 20
const item2 = '26'
const sum = item1 + item2
console.log(item1)
console.log(item2)
console.log(sum)
console.log(typeof sum)



// Type conversion from string to integer
const numberString = '105';
const number = parseInt(numberString)
console.log(numberString)
console.log(typeof numberString)
console.log(number)
console.log(typeof number)

// Type conversion from string to integer and float
const numberString2 = '27.98'
const num1 = parseInt(numberString2)
console.log(numberString2)
console.log(typeof numberString2)

console.log(num1)
console.log(typeof num1)

const num2 = parseFloat(numberString2)
console.log(num2)
console.log(typeof num2)

// Add fraction number and observe output and then convert it with Fixed number of digit
const number1 = 0.1
const number2 = 0.2
const totalNumber = number1 + number2
console.log(totalNumber)
const totalTwoDigit = totalNumber.toFixed(2)
console.log(totalTwoDigit)
const totalTwoDigitFloat = parseFloat(totalTwoDigit)
console.log(totalTwoDigitFloat)