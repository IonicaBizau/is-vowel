const IsVowel = require('../lib/index');

test("Non-string inputs return false.", () => {
    expect(IsVowel(0)).toBe(false);
    expect(IsVowel(true)).toBe(false);
    expect(IsVowel({})).toBe(false);
    expect(IsVowel([])).toBe(false);
    expect(IsVowel(() => {})).toBe(false);
    expect(IsVowel(/./)).toBe(false);
});
