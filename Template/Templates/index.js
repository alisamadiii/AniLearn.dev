const capitalizeWord = (word) => {
  const strToArr = word.split("-");
  const actualWord = strToArr
    .map((w) => {
      const firstLetter = w.charAt(0).toUpperCase();
      const remainingLetters = w.slice(1);

      return firstLetter + remainingLetters;
    })
    .join("");

  return actualWord;
};

module.exports = { capitalizeWord };
