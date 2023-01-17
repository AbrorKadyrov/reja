console.log("Train js ishga tushdi");
// J- task
function number(num) {
  if (num == 0) return 0;
  else if (num < 0) return -1;
  else return 1;
}

console.log(number(-12));

// I - task;

// function getPositive(num) {
//   const arr = num.filter((val) => val > 0);
//   return arr;
// }

// const result = getPositive([0, -15, 5, -3, 2, -8, 9, -11]);
// console.log(result);

// H-Task

// function reverseString(str) {
//   return str.split("").reverse("").join("");
// }

// console.log(reverseString("javascript"));

// G-Task

// const num = [2, 1, 200, 30, 3, 30];

// function findBig(num) {
//   let res = [];

//   num.forEach((val) => {
//     if (val > res) res = val;
//   });

//   return num.indexOf(res);
// }

// console.log(findBig(num));

// F-task==================================================

// function findDoubler(str) {
//   let newstr = str.split("");

//   let res = newstr.map((value, i) => {
//     if (value.includes(newstr[i + 1])) return true;
//     else false;
//   });

//   return res.includes(true);
// }

// let result = findDoubler("hello");
// console.log(result);

// ===========================================================
