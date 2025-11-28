const palindromes = require(`./palindromes`);

describe(`palindromes()`, () => {
  it(`correctly identifies one-word palindromes`, () => {
    expect(palindromes("madam")).toEqual([`madam`]);
    expect(palindromes("racecar")).toEqual([`racecar`]);
    expect(palindromes("fooboof")).toEqual(["fooboof"]);
  });
  it("returns an empty array when given no palindromes", () => {
    expect(palindromes("tic tac toe")).toEqual([]);
  });
  it("ignores casing", () => {
    expect(palindromes("WoW")).toEqual(["wow"]);
  });
  it("ignores punctuation", () => {
    expect(palindromes("yo, banana boy!")).toEqual("yobananaboy");
  });
  it("detected multi-word palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual([
      "amanaplanacanalpanama",
    ]);
  });
});
