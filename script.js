function letterCombinations(input_digit) {
 if (digits === '') {
    return [];
  }

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const combinations = [];

  backtrack('', digits);

  return combinations;

  function backtrack(currentCombination, remainingDigits) {
    if (remainingDigits.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = remainingDigits[0];
    const letters = digitToLetters[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const currentLetter = letters[i];
      backtrack(currentCombination + currentLetter, remainingDigits.slice(1));
    }
  }
}

module.exports = letterCombinations;
