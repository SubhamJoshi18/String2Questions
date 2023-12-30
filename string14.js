function string14(str, n) {
  const prefix = str.substring(0, n);
  const strlength = str.length;
  for (let i = 0; i, strlength - 1; i++) {
    let currentPrefix = str.substring(i, i + n);
    if (currentPrefix === prefix) {
      return true;
    }
    return false;
  }
}
