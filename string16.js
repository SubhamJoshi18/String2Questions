function string16(str) {
  let firstPiece = str.indexOf("bread");
  let lastPiece = str.lastIndexOf("bread");
  if ((firstPiece !== -1 && lastPiece !== -1) || firstPiece < lastPiece) {
    return str.substring(firstPiece + 5, lastPiece);
  }
}

let input1 = "breadjambread";
console.log(string16(input1));
