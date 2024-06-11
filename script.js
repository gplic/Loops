// Ex. Hello World x 25

// console.log("hello world");

// Create a loop that runs 25 times.
// var i = 0; // control variable - constrols when loop breaks

// while (i < 25) {
//     console.log("hellow world");
//     i++; //increase i by 1
// }

// All loops need 3 things:
// 1. Control variable. e.g. var i = 0
// 2. Loop contition. E.g. i < 25 Should ALWAYA start true, eventualy becoming false. DO THIS TO CHECK.
// 3. Increment the control variable, otherwise INFINENT LOOP!

// // Ex. 0-99
// let i = 99;
// while (i >= 0) {
//     console.log(i)
//     i--;
// }

// let userWord = ""; // control variable

// while (userWord != "STOP") {
//     userWord = prompt("Type STOP to break the loop")
// }

// alert ("Thanks for typing stop");

// Pringt all ODD numbers from 50 to 100

// let j = 50;
// while (j <= 100) {
//     if ((j % 2) == 1) {
//         console.log(j);
//     }
//     j++
// }
// OR
// let j = 51;
// while (j <= 100) {
//     console.log(j);
//     j += 2 ;
// }

// // Ex print -10 to +10
// let i = -10;
// do {
// console.log(i);
// i ++;
// }while (i <= 10)

// //Ex Type STOP

// let userWord;
// do {
//     userWord = prompt ("Type STOP");
// } while (userWord != "STOP")

// // Ex input range
// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let mid;

// do {
//     mid = +prompt(`Enter a value between ${min} amd ${max}.`)
// } while (mid < min || mid > max)
// alert("Thank You");

// // Ex. Break statment

// let num;
// while (true) {
//     num = +prompt("Enter a value between 1 and 10");
//     if (num >= 1 && num <=10) {
//         break;
//     }
// }
// alert("Thanks")

// //Ex 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//     counter--;
//     if (counter == 18) {
//         continue; // skips the rest of the statment
//     }
//     console.log(counter);
// }


// // Ex avrage calc
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while(true) {
//     userNum = +prompt("Enter a Value (0 to quit):")
//     if (userNum == 0) {
//         break;
//     }
//     numOfValues ++;
//     sum = sum + userNum
// }
// sum = sum / numOfValues
// alert(`The sum of the numbers is ${sum}`)

// //1. 
// let i = 1;
// while (i <= 800) {
//     i++;
//     console.log("Hello");
// }

// //2.
// let i = 20

// do {
// i += 5;
// console.log(i);
// } while (i < 500)

// //3.
// let i = 100
// do {
// console.log(i)
// i -= 2;
// } while (i >= 10)

// //4.
// let sum = 0;
// let runNum = 18;

// while (true) {
//     if (runNum > 150 ){
//         break;
//     }
//     sum = sum + runNum
//     runNum ++;
// }
// sum = sum / 132;
// console.log(sum);

// // 5.
// let sum = 0;
// let runNum = 10;

// while (true) {
//     if (runNum > 100 ){
//         break;
//     }
//     sum = sum + runNum
//     runNum += 5;
// }
// console.log(sum);

// sum = 0;
// runNum = 10;

// do {
//     sum = sum + runNum
//     runNum += 5;
// } while (runNum <= 100)
// console.log(sum);



// //Ex8
// let secret = Math.floor(Math.random() * 20) + 1;
// let userNum = +prompt("Guess a number from 1-20:");1
// while (true) {
//     userNum = +prompt("Wrong, Try again");
//     if (userNum == secret) {
//         break
//     }
// }
// alert("Correct")

// // For loops

// //control
// let i = 1;
// //      condition
// while (i <= 10) {
//     console.log(i);
//     // increment
//     i++;
// }
// //control      condition  increment
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// // Ex. BLASTOFF
// for (var i = 10; i >= 1; i--) {
//      console.log(i);
// }
// console.log(`BLASTOFF!`);

// //Ex. Factorial 
// let start = +prompt("Enter a number to find its factorial:");
// let result = 1;

// for (let i = start; i >= 1; i--) {
//     console.log(`i: ${i}`)
//     result = result * i;
//     console.log(`result: ${result}`)
// }
// console.log(`${start}! = ${result}`);

// // Ex. Odd Sum: E.g. 10: 1 + 3 + 5 + 7 + 9 = 25
// let num = +prompt("Enter an ODD number:");
// let total = 0;

// for (let i = 1; i <= num; i += 2) {
//     total += i;
// }
// console.log(total);


let guess = 0;
let secret = Math.floor(Math.random() * 20) + 1;
let lastGuess = 0;
console.log(secret);

for (let i = 5; i >= 0; i--) {
    guess = +prompt("Enter a number from 1-20")
    if (guess == secret) {
        console.log(`Enter a number from 1-20: ${guess}`)
        console.log("Correct!")
    } else {

    }
}