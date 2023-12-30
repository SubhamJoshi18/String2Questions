function string6(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (
      (str.substring(i, i + 3) === "xyz" && i === 0) ||
      str.charAt(i - 1) !== "."
    ) {
      return true;
    }
  }
}
let input1 = "abcxyz";
console.log(string6(input1));
