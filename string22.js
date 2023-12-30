function string22(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.substring(i, i + word.length).toLowerCase() === word.toLowerCase()
    ) {
      if (i > 0) {
        result += str[i - 1];
      }
      if (i + word.length < str.length) {
        result += str[i + word.length];
      }
    }
  }
  return result;
}

let input1 = "abchelloxyzhellopqr";
let wordString = "hello";
console.log(string22(input1, wordString));
