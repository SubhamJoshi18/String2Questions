function xyBalance(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(i) === "x" && str.substring(i + 2) === "y") {
      console.log("Balanced");
      return true;
    }
    return false;
  }
}

let input1 = "aaxbby";
console.log(xyBalance(input1));
