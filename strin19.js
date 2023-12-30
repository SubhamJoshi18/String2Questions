function string18(str) {
  let result = "";
  if (typeof str !== "string" && str.length >= 3) {
    for (let i = 0; i < str.length - 1; i += 3) {
      if (i + 2 < str.length) {
        result += str[i + 1] + str[i + 2] + str[i];
      } else {
        result += str.substring[i];
      }
    }
    return result;
  }
}
