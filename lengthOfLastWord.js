const lengthOfLastWord = (str) => {
  let splitedStr = str.trim().split(" ");
  return splitedStr[splitedStr.length - 1].length;
};
