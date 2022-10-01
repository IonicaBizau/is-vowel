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
  const Vowels = ["a", "e", "i", "o", "u"];
  input = input.toLowerCase(); // Convert uppercase vowel to lowercase vowel
  input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Add support for accents/diacritics
  return Vowels.includes(input);
}

module.exports = IsVowel;
