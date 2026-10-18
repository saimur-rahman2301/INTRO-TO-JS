// Variable naming rules in JavaScript

// 1. Variable name should be somehting meaningful
let age = 21;
let name = "Md. Saimur Rahman";
console.log(age);
console.log(name);

// 2. Variable name should not be a reserved keyword
// const let=29; 'let' cannot be used as a variable here.
// console.log(let);

// 3. Variable name should not start with a number
// let 2age=21; // This will cause a syntax error
let age2 = 22; // This is valid
let a2ge = 23; // This is also valid

// 4. Variable name should not contain any space
// const her phone number = 1234567890;    // This will cause a syntax error
const her_phone_number = 1234567890; // This is valid. Snake case
const herPhoneNumber = 1234567890; // This is valid. Camel case. "Usually used in JavaScript".
const HerPhoneNumber = 1234567890; // This is valid. Pascal case

// 5. Variable name can contain letters, numbers, underscore and dollar sign
let _money = '100k';
console.log(_money);
let $bankbalance = "500k";
console.log($bankbalance);

// 6. Case sensitive
let address = "Mrigi";
let Address = "Sonapur";
let AddRess = "Pangsha";
console.log(address);
console.log(AddRess);
console.log(Address);