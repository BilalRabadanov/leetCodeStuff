function isValidBrackets(s) {
  let stack = [];
  let openSet = new Set(["(", "{", "["]);
  let closeOpenMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (openSet.has(s[i])) {
      stack.push(s[i]);
    } else {
      const pop = stack.pop();
      if (pop !== closeOpenMap.get(s[i])) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
