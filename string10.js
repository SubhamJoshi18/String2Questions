function string10(a, b) {
  let firstCharA = a.charAt(0);
  let secondCharB = b.charAt(0);
  let secondCharA = a.charAt(1);
  let charb = b.charAt(1);
  let third = a.charAt(2);
  let thirdB = b.charAt(2);

  return firstCharA + secondCharB + secondCharA + charb + third + thirdB;
}
let input1 = "abc";
let input2 = "xyz";
console.log(string10(input1, input2));
