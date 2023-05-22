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

  const digits = input_digit.split('');

	if( digits == digitToLetters){
	   return digits * digitToLetters	;
	}





	

module.exports = letterCombinations;
