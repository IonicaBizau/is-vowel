const vowels = ["a", "e", "i", "o", "u"];

/**
 * IsVowel
 * Checks if the input is a vowel.
 *
 * @name IsVowel
 * @function
 * @param {String} input The input letter.
 * @return {Boolean} `true`, if the input is a vowel, `false` otherwise.
 */
function IsVowel(input) {
  input = input.toLowerCase(); // Convert uppercase vowel to lowercase vowel
  input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Add support for accents/diacritics
  console.log(vowels);
  return !!~vowels.indexOf(input);
}

module.exports = IsVowel;
