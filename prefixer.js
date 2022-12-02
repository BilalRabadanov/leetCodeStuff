function prefix(words) {
  if (!words[0] && words.length === 0) return words[0] || "";

  let i = 0;
  while (words[i] && words.every((w) => w[i] === words[0][i])) i++;

  return words[0].substring(0, i);
}
