/*let arrStd = ["khalil", "rafi", "waliullah"];

arrStd.push("safiullah");
console.log(arrStd);
//question no 1 completed.

let fruits = ["banana", "Mango", "Orange", "Cherry"];

fruits.pop();
console.log(fruits);
//Question No 2 done.

let days = ["Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

days.unshift("Monday");
console.log(days);
//Question NO 3 Done.

let colors = ["red", "Green", "blue"];

colors.unshift("white");
console.log(colors);
//Question NO 4. DONE

let sub = [
  "English",
  "Urdu",
  "computer",
  "social-Studies",
  "Islamiet",
  "Geography",
];

sub.splice(2, 0, "Science", "Math");
console.log(sub);
//Question NO 5 done;

const cities = [
  "Karachi",
  "Barkhan",
  "Quetta",
  "Islamabad",
  "punjab",
  "Mastung",
];

cities.splice(0, 2);
console.log(cities);
//Question NO 6 done;

const countrys = [
  "USA",
  "UAE",
  "AFGHANISTAN",
  "Turkey",
  "Russia",
  "China",
  "Japan",
  "London",
];
const newArr = countrys;

console.log(newArr.slice(1, 4));

countrys.splice(1, 4);
console.log(countrys);
//Q No 7 done.

let arr = [12, 30, 50, 80];

// const para = document.querySelector("#para");
// const display = document.querySelector("#display");

// display.addEventListener("click", () => {
//     if (getComputedStyle(para).display === "none") {
//         para.style.display = 'block'
//         console.log("paara shown");
//     } else {
//         para.style.display = 'none'
//         console.log("not hidden");
//   }
// });
*/

// 8. Convert the string "apple,banana,mango" into an array using split().

const newArr = "apple,banana,mango";

newArr.split();
console.log(newArr.split(" "));

//9. Join an array of characters ['J','S'] into a single string using join().
const joinArr = ["j", "s"];
console.log(joinArr.join(""));

// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().

const Combine = ["pen", "pencil"];
const secondArr = ["eraser", "sharpener"];

console.log(Combine.concat(secondArr));

// 11. sort an array of numbers [10, 5, 2, 8] using sort() (as strings).

const numbArr = [10, 5, 2, 8];
const now = numbArr.sort((a, b) => {
  return a - b;
});
console.log(now);

// 12. Sort an array of names alphabetically using sort().
const alpha = [
  "x",
  "z",
  "a",
  "b",
  "t",
  "g",
  "c",
  "e",
  "f",
  "d",
  "f",
  "j",
  "k",
  "i",
  "l",
  "h",
];
console.log(alpha.sort());

//  13. Reverse the order of an array of numbers using reverse().

const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 34, 56, 14, 16, 19, 45];
let newNumbers = numbers.reverse();
console.log(newNumbers);

// 14. Use indexOf() to find the index of "Blue" in a colors array.
const ind = ["red", "green", "yellow", "white", "blue", "wheat", "white"];
console.log(ind.indexOf("blue"));

// 15. Add three new items to an empty array using push().
const empty = [];
empty.push("khalilullah");
console.log(empty);

// 16. Remove the middle item from an array of 5 numbers using splice().
// splice changes the orgiginal array, and slice changes the copy of original array.
let num1 = [20, 40, 30, 10, 50];

num1.splice(2, 1);
console.log(num1);

// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
const string = "HTML CSS JavaScript";
const changeStr = string.split(" ");
console.log(changeStr);

// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.

const arrABC = ["a", "b", "c"];

const abc = arrABC.reverse();
console.log(abc.join("-"));

// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
const cities = [
  "peshawar",
  "islamabad",
  "punjab",
  "Quetta",
  "Karachi",
  "haiderabad",
  "sindh",
  "balochistan",
];
console.log(cities);
console.log(
  `the index Of Karachi in Array is => "${cities.indexOf("Karachi")}"`
);

// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse them.
const even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const joining = even.concat(odd);

console.log(joining.reverse());
