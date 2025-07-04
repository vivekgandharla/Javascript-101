// console.log("Hello, World!");

// //question 1
// for(let i = 1; i <=10; i++){
//     console.log(i);
// }
// //question 2
// console.log(1+1);
// console.log(1+200);
// console.log(200+"300");
// console.log("learning"+"javascript"+400);

// //question 3
// console.log(2===2);
// console.log(2=="2");
// console.log(2===+"2");
// console.log("learnJavascript"==="learnJavascript");
// console.log("learnJavascript"==="LearnJavascript");
// console.log(0.3 == 0.30);
// console.log(1.0 == 1);
// console.log(1.0 === 1);

// //question 4
// const nameIs = "Vivek";
// let age = 25;
// let gender = "Male";
// let phone = "1234567890";
// let address = "123 Street, City, Country";
// console.log(nameIs+", " + age+","+gender+","+phone+","+address);

// //question 5
// //this coz x is in global scope and y,x in block scope
// var x = 10;
// {
//     let y = 20;
//     const z = 30;
//     console.log("Inside block: x =", x, ", y =", y, ", z =", z);
// }


// //question 6
// function calculator(a, b, operation) {
//     switch(operation) {
//         case 'add':
//             return a + b;
//         case 'subtract':
//             return a - b;
//         case 'multiply':
//             return a * b;
//         case 'divide':
//             return a / b;
//         default:
//             return "Invalid operation";
//     }
// }

// //question 7
// return ifPassed();
// function ifPassed(){
//         let marks = 77;
//     if(marks >=60){
//         console.log("passed")
//     }else console.log("failed");
// }


//question 8
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
function oddOrNot(num1, num2) {
    if(num1 % 2 ===0 && num2 % 2===0){
        console.log("Both numbers are even");
}else if(num1 % 2!=0 && num2 % 2!=0){
        console.log("Both numbers are odd");
}else console.log("One number is even and the other is odd");
}
oddOrNot();


//question 9

