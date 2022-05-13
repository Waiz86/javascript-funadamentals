// // Week 1 Day 2 
// // If Else and Switch 

// // Activity 1 - Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.

// let age = 38

// if (age > 17){
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("You aren’t old enough")
// }

// // Take your if statement and add a variable called country in.
// let age1 = 38
// let country = "USA"

// if (age > 17 && country == "UK"){
//     console.log("Yes I can serve you")
// }
// else {
//     console.log("Sorry I can not serve you")
// }

// // Activity 2 Create a variable for any pizza topping.
// // Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
// // Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

// let pizzaTopping = "Pineapple"

// switch (pizzaTopping){
//     case "Chicken":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "Onions":
//         console.log(`I don’t mind having ${pizzaTopping} on my pizza`);
//         break;
//     case "Pineapple":
//         console.log(`${pizzaTopping} should not be on a pizza.`)
//         break;
// }

// // Activity 3 Create a variable called password.
// // Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

// let password = "enter"

// if (password.length < 8){
//     console.log("The password is too short");
// }
// else {
//     console.log(password)
// }

// // Activity 4 Create a variable called num.
// // Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

// let num = 7

// if (num % 3 === 0 || num % 5 === 0){
//     console.log("This number is divisible by 3 or 5")
// }
// else {
//     console.log("This number is not divisible by 3 or 5")
// }

// // Activity 5 Create a variable called num.
// // If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

// let num1 = 5
// if (num1 % 3 === 0 && num1 % 5 === 0){
//     console.log("fizz buzz")
// }
// else if (num1 % 3 === 0){
//     console.log("fizz")
// }
// else if (num1 % 5 === 0){
//     console.log("buzz")
// }

// // Activity 6 Create a variable called num.
// // Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

// let num2 = 1001;
// let text = num2.toString();
// let arrayText = text.split("");
// let reverseArray = arrayText.reverse();
// let joinArray = reverseArray.join("");

// if (text == joinArray){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not a Palindrome")
// }

// // Activity 7 Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// let time = 11;
// let placeOfWork = "Liverpool"
// let townOfHome = "Wallasey"

// if (time < 9 && time > 7){
//     console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
// }
// else if (time > 9 && time < 18){
//     console.log(`In work in ${placeOfWork}`)
// }
// else if (time > 18 && time < 20){
//     console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
// } else {
//     console.log(`At home in ${townOfHome}`)
// }

// // Activity 8 Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

// let theString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// console.log(theString.lastIndexOf("i"))

// // Activity 9 Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

// let word = "drippled"
// if (word[0] == word[word.length - 1]){
//     console.log(`${word} starts and ends with the same letter`);
// }
// else {
//     console.log(`${word} does not start and end in the same letter`);
// }

// // Activity 10 Create two variables called num1 and num2.
// // Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// let theNum1 = 2;
// let theNum2 = 15;
// let sum = theNum1 + theNum2;
// if (sum % 2 == 0){
//     console.log(sum);
// }
// else {
//     console.log(theNum1 * theNum2);
// }