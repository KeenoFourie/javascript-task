// Way 1:

let firstNumber = 15; 
let secondNumber = 17;

[firstNumber, secondNumber] = [secondNumber, firstNumber]       //Changes first number to the second number and vice versa

console.log(firstNumber, secondNumber);                         //Puts the swapped numbers into the console


// Way 2:

let firstNumber1 = 15; 
let secondNumber1 = 17;

firstNumber1 = firstNumber1 + secondNumber1;                     // 15 + 17 (is now first number)
secondNumber1 = firstNumber1 - secondNumber1;                    // (15 + 17 (this is the new first number we created)) - 17 = 15 (second number will now = 15 / first number)
firstNumber1 = firstNumber1 - secondNumber1;                     // (15 + 17) - 15 (second number just created) = 17 (first number is now = 17 / second number)

console.log(firstNumber1, secondNumber1);


// Way 3:

let firstNumber2 = 15; 
let secondNumber2 = 17;
let change_around;

change_around = firstNumber2;               //undefined variable is given the value of first number
firstNumber2 = secondNumber2;               //first number(now undefined) is given the value of second number
secondNumber2 = change_around;              //second number(now undefined) is given the value of the varaible holding the first number 

console.log(firstNumber2, secondNumber2);