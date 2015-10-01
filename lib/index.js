// Dependencies
var Vowels = require("vowels");

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
    return !!~Vowels.indexOf(input);
}

module.exports = IsVowel;
