function zipzap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i + 2 < str.length && str[i] === "x" && str[i + 2] === "p") {
      result += str[i] + str[i - 2];
      i += 2;
    } else {
      result += str[i];
    }
  }
  return result;
}

let input1 = "zipXzap";
console.log(zipzap(input1));
