function string21(str, word) {
  const regEx = new RegExp(word, "g");

  return str.replace(/./g, (match) => (match === word[0] ? word : "+"));
}

let inputString = "12xy32";
let inputstring1 = "xy";
console.log(string21(inputString, inputstring1));
