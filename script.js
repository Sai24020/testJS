console.log("Hello, World!");

let myString = "Jag heter Suzan";
console.log(myString);

let myNum = 43;
console.log(myNum + "år.");
console.log("Spelet STEGEN har börjat!");
console.log("(Mål 1 - Mål 2 - Mål 3 - Mål 4 - Mål 5 - Mål 6) efter hur många Throws!?");
console.log("-vissas till sist av Spelan");
console.log("*******************************");
let Throws = 0;
let currentNum = 1;

while (currentNum <= 6) {
  let rollNum = Math.floor(Math.random() * 6 + 1);
  Throws++;
  console.log("Titta på computersthrow:", rollNum , "throwsnumber=",Throws);
  
  if (rollNum == currentNum) {
    console.log("Ditt mål:", currentNum);
    currentNum++;
  }
}
console.log("Du slutade spelan med", Throws, "Throw.");