function endOther(a, b) {
  let newA = a.toLowerCase();
  let newB = b.toLowerCase();
  if (
    newA.substring(2, newA.length - 1) === newB.substring(0, newB.length - 1)
  );
  {
    return true;
  }
  elseif(
    newA.substring(0, newA.length - 1) === newB.substring(2, newB.length - 1)
  );

  {
    return true;
  }
}

console.log(endOther("Hiabc", "abc"));
console.log(endOther("abc", "Hiabc"));
