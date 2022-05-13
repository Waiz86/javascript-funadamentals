
// let offer = "none";
// let time = 1200;

// const cafe ={

// name: "Whitesheep",
// SeatingCapacity: 100,
// hasSpecialoffers: true,
// drinks: [
// "Cappuccino",
// "Latte",
// "filter coffee",
// "tea",
// "Hot cholate"
// ],
// breakfastoffer: "Free croissant with coffer",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer"

// };
// if (time < 1100){
// offer = cafe.breakfastoffer;
// console.log(cafe.breakfastoffer);
// } else if (time < 1500){
//     offer =cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// };



// const person ={
// name: "Waseem",
// age: 34

// };
// console.log(person);= {


// let offer = "none";
// let time = 1200;

// const cafe ={

// name: "Whitesheep",
// SeatingCapacity: 100,
// hasSpecialoffers: true,
// drinks: [
// "Cappuccino",
// "Latte",
// "filter coffee",
// "tea",
// "Hot cholate"
// ],
// breakfastoffer: "Free croissant with coffer",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer",
// openCafe(){
//     if(this.hasSpecialoffers)

// },
// closeCafe(){
//     return "We are closed, come back tomorrow!"
// }
// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with sandwich",
//     noOffer: "Sorry no offer",
//     openCafe (){
//         if(this.hasSpecialOffers){
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     }
// };
// console.log(cafe.openCafe());


// Activity 1: JS Let’s edit our person object to include… A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”


// const person ={
//     name: "Waseem",
//     age: 34,

// sayHi(){
//         return `Hello my name is ${this.name}`;
//     }
// };
// console.log(person.sayHi());

// Activity 2: JS
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your Pet Name] is eating/drinking.

// const pet ={

//     name: "Shera",
//     typeOfPet: "dog",
//     age: 3,
//     colour: "black",

// eat(){   
//     return `${this.name} is eating chicken`;
//     },
// drink(){
//     return `${this.name} is drinking dhood`;    
//     }
// };
// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3:
// Create an object called coffeeShop with key values of: 
// JS
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all 
// items chosen with costs and total costs.

// let cost = 0;
// let order = "";


// const clearOrder = () => {
//     cost = 0;
//     order = "";
// }

// const coffee_shop = {
//     branch: "Ashton",
//     drink_prices: {
//         "Tea": 1.30,
//         "Coffee": 1.45,
//         "Hot Chocolate": 1.60
//     },
//     food_prices: {
//         "Ham Sandwich": 2.50,
//         "Meat Pie": 1.00,
//         "Chicken Salad": 3.20,
//         "Sausage Roll": 1.15
//     },
//     getMenu() {
//         console.log("Drink Prices: ");
//         this.drink_prices.forEach(item => console.log(`${item[0]} for a price of ${item[1]}`));

//         console.log("Food Prices: ");
//         this.food_prices.forEach(item => console.log(`${item[0]} for a price of ${item[1]}`));
//     },
//     foodOrdered(food) {
//         // This currently allows me to see that some elements can be found, however I am currently unable to list them
//         // const found = food.some(r => this.food_prices[0].indexOf(r) >= 0);
//         // return found

//         food.forEach(item => cost += this.food_prices[item]);
//         food.forEach(item => order += `a £${this.food_prices[item].toFixed(2)} ${item}, `);
//         let out = `Your order of ${order}comes to a todal of £${cost.toFixed(2)}`;

//         clearOrder();
//         return out;
//     },
//     drinkOrdered(food) {
//         // This currently allows me to see that some elements can be found, however I am currently unable to list them
//         // const found = food.some(r => this.food_prices[0].indexOf(r) >= 0);
//         // return found

//         food.forEach(item => cost += this.drink_prices[item]);
//         food.forEach(item => order += `a £${this.drink_prices[item].toFixed(20)} ${item}, `);
//         let out = `Your drink order of ${order}comes to a todal of £${cost}`;

//         clearOrder();
//         return out;
//     }
// };

// drink_order = ["Tea", "Hot Chocolate"];
// food_order = ["Ham Sandwich", "Sausage Roll"];

// // coffee_shop.getMenu();
// console.log(coffee_shop.foodOrdered(food_order));
// console.log(coffee_shop.drinkOrdered(drink_order));