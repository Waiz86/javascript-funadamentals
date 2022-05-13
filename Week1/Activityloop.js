
let favSongs = [
"Shape of you",
"One kiss",
"Havana"
];
console.log(favSongs.length);

let favMovies = [
    "jason Bourne",
    "Godfather",
     "Titanic",
     "Wolf of wall street",
     "The Matrix"
     ];
     favMovies.push("Goodfellas");
     favMovies.push("Star wars");
    
    favMovies.pop("The dark knight");
    
    console.log(favMovies.length);

console.log(Math.random()) // 0-1
console.log(Math.random() * 10) // 1-10
console.log(Math.floor(Math.random() * 10)) // whole number


let randNum = [];
while(randNum.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
    if(randNum.indexOf(r) === -1) randNum.push(r)
}
console.log(randNum)

let randomNumbers = [];

for (let i = 0; i < 6; i++) {
  randomNumbers.push(Math.floor(Math.random() * 50));
}
console.log(randomNumbers);

let nums = [];
for (let i=0; i < 9; i++){
ramdomnums.push

}

console.log(nums);

let favSongs = [
"Shape of you",
"One kiss",
"Havana"
];

console.log(favSongs);

favSongs.push("Perfect", "Morining Light");
console.log(favSongs);

favSongs.pop()
console.log(favSongs);

favSongs.shift()
console.log(favSongs);

favSongs.unshift("Anywhere");
console.log(favSongs);

let Months = ["January", "March", "April", "July", "August", "September", "December"];
console.log(Months);

Months.splice(1, 0, "Febuary");
console.log(Months);

Months.splice(4, 1,"May");
console.log(Months);

Months.splice(5, 3, "June");
console.log(Months);


let Array1 = [1,4,9,16]; 
let Map1 = Array1.map(x => x * 2);

console.log(Map1);


let favMovies = [
    "Godfather", "jason Bourne", "The Matrix","Titanic",
    "Wolf of wall street",
     ];
console.log(favMovies);

favMovies.splice(0, 0, "Darknight", "Godfellas");
console.log(favMovies);

for(let i =0; i < favMovies.length; i++){
    console.log(favMovies[i])
}

for(let i=0; i < 6; i++){
    console.log(Math.round(Math.random()*50))
};

