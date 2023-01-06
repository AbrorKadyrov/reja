// F-Task
console.log("Train js ishga tushdi");

function findDoubler(str) {
  let newstr = str.split("");

  let res = newstr.map((value, i) => {
    if (value.includes(newstr[i + 1])) return true;
    else false;
  });

  return res.includes(true);
}

let result = findDoubler("hello");
console.log(result);
