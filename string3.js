function string3(str) {
  if (str.substring(0, 3) === "cat" && str.substring(3)) {
    return true;
  }
  return false;
}
let input1 = "catdog";
console.log(string3(input1));
