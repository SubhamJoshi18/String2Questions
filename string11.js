function repeatEnd(str, n) {
  let lastChar = str.substring(str.length - 3);
  return lastChar.repeat(n);
}

let input1 = "hello";
let number = 3;
console.log(repeatEnd(input1, number));
