function string2(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) === "hi") {
      count++;
    }
  }
  return count;
}

let input1 = "abc hi ho";
console.log(string2(input1));
