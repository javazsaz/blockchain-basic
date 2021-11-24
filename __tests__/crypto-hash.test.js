// It will simply be  a method which will generate hash
const cryptoHash = require("../crypto-hash");

describe("cryptoHash()", () => {
  it("it generates a SHA-256 hashed output", () => {
    expect(cryptoHash("foo")).toEqual(
      "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
    );
  });
  it("It produces the same hash with same input", () => {
    expect(cryptoHash("One", "Two", "Three")).toEqual(
      cryptoHash("One", "Three", "Two")
    );
  });
});
