const hacker1 = "Jose";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mark";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker2.length > hacker1.length){
  console.log(`the navigator has the longest name, it has ${hacker2.length} characters`)
}
else (console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`))

let upperCaseName = " ";

for (let i = 0; i < hacker1.length; i++){
  upperCaseName += hacker1[i].toUpperCase()+ " ";
}
console.log(upperCaseName);

let reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--){
  reverse += hacker2[i];
}
console.log(reverse);


if (hacker1 > hacker2){
  console.log("The driver's name goes first");
}
else if (hacker2 < hacker2){
  console.log("Yo, the navigator goes first, definitely");
}
else (console.log("What?! You both have the same name?"))