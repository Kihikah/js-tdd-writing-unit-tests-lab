import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a simple palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });
});
