console.log("Train js ishga tushdi");

// E-Task

function calculator(a, b, c) {
  if (b == "/" && c == 0) {
    return "not valid to operate";
  } else if (a == 0 && c == 0) {
    return "not valid to operate";
  } else if (b == "*") {
    return `${a * c} `;
  } else if (b == "/") {
    return `${a / c} `;
  } else if (b == "+") {
    return `${a + c} `;
  } else if (b == "-") {
    return `${a - c} `;
  }
}

const result = calculator(2, "*", 0);

console.log(result);
