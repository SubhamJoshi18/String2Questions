function string8(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.length > 3 && str.substring(i, i + 3) === "bob") {
      return true;
    } else if (str.length <= 3 && str.charCodeAt(1) === "number") {
      return true;
    } else if (str.length <= 3 && str.charCodeAt(1) === "string") {
      return false;
    }
  }
}

let input1 = "abcbob";
let input2 = "b9b";
let input3 = "bac";
console.log(string8(input1));
console.log(string8(input2));
console.log(string8(input3));
