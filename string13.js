function string13(word, sep, count) {
  if (word && sep) {
    let addedString = word.concat(sep);
    return addedString.repeat(count);
  }
}

let input1 = "word";
let input2 = "x";
let number = 3;
console.log(string13(input1, input2, number));
