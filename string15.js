function string15(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(0, 2).length === str.substring(str.length - 2).length) {
      return true;
    }
  }
}

let input1 = "AAxyzBB";
console.log(string15(input1));
