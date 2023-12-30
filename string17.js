function string17(str) {
  let anyIndex = str.indexOf("*");
  if (anyIndex !== -1 && anyIndex) {
    return true;
  }
}

let input1 = "xy*yzz";
console.log(string17(input1));
