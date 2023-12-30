function string4(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) === "co") {
      count++;
    }
  }
  return count;
}

let input1 = "aaacodebbb";
console.log(string4(input1));
