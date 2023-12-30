function string1(str) {
  let first = str.charAt(0);
  let second = str.charAt(1);
  let third = str.charAt(2);
  return first.repeat(2) + second.repeat(2) + third.repeat(2);
}
let input1 = "The";
console.log(string1(input1));
