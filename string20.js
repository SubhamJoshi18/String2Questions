function string20(str) {
  let result = "";

  if (str.indexOf("*")) {
    result += str.charAt(0) + str.charAt(str.length - 1);
  } else {
    result += str.substring(i);
  }

  return result;
}

let input1 = "ab*cd";
console.log(string20(input1));
