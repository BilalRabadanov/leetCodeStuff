const isPalindrome = (x) => {
  x = x.toString();
  if (x[0] == "-") {
    return false;
  }
  for (let i = 0, j = x.length - 1; i < x.length, j >= 0; i++, j--) {
    if (x[i] !== x[j]) {
      return false;
    }
    if (j === i) {
      break;
    }
  }

  return true;
};
