const IsVowel = require('../lib/index');

test("Unaccented vowels return true.", () => {
    expect(IsVowel("a")).toBe(true);
    expect(IsVowel("e")).toBe(true);
    expect(IsVowel("i")).toBe(true);
    expect(IsVowel("o")).toBe(true);
    expect(IsVowel("u")).toBe(true);
});

test("Unaccented not-vowels return false.", () => {
    expect(IsVowel("b")).toBe(false);
    expect(IsVowel("c")).toBe(false);
    expect(IsVowel("d")).toBe(false);
    expect(IsVowel("f")).toBe(false);
    expect(IsVowel("g")).toBe(false);
    expect(IsVowel("h")).toBe(false);
    expect(IsVowel("j")).toBe(false);
    expect(IsVowel("k")).toBe(false);
    expect(IsVowel("l")).toBe(false);
    expect(IsVowel("m")).toBe(false);
    expect(IsVowel("n")).toBe(false);
    expect(IsVowel("p")).toBe(false);
    expect(IsVowel("q")).toBe(false);
    expect(IsVowel("r")).toBe(false);
    expect(IsVowel("s")).toBe(false);
    expect(IsVowel("t")).toBe(false);
    expect(IsVowel("v")).toBe(false);
    expect(IsVowel("w")).toBe(false);
    expect(IsVowel("x")).toBe(false);
    expect(IsVowel("y")).toBe(false);
    expect(IsVowel("z")).toBe(false);
});