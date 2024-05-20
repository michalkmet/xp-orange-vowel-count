function vowelCount(inputStr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let char of inputStr) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

module.exports = vowelCount;
