import { isPalindrome } from "./palindrome";

describe("Palindrome Tests", () => {
  it("should return true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for palindrome string", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for palindrome with mixed case", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("should return true for palindrome with spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should return true for emojis", () => {
    expect(isPalindrome("😏madam😏")).toBe(true);
  });

  it("should return false for odd no. emojis", () => {
    expect(isPalindrome("😏madam")).toBe(false);
  });
});
