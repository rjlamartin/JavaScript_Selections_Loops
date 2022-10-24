console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i+=2){
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    }else if (i % 3 == 0){
        console.log(i, "FIZZ");
    }else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
}

//Exercise 3
//Part 1
//let = 1;
//do {
//    console.log(i)
//    i+=2
//} while (i <=100);

//Part 2
let i = 1;
while(i <= 100){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    }else if (i % 3 == 0){
        console.log(i, "FIZZ");
    }else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
    i++;
}

//Exercise 4
//0 - 500
let value = Math.round((Math.random() * 500));
//100-500
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log("n", n);
console.log("value", value);

for (let i = 0; i <= n; i++){
    if (i == value){
        console.log("Found value!");
        break;
    }
    if (i == n){
        console.log("Epic fail");
    }

}
//console.log("Did not find value");


//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); 
// creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 1000


for (let i = start; i <= end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(i, "FIZZBUZZ");
    }else if (i % fizzDivisor == 0){
        console.log(i, "FIZZ");
    }else if (i % buzzDivisor == 0){
        console.log(i, "BUZZ");
    }
}
