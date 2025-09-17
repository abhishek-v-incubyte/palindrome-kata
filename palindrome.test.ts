import { isPalindrome } from "./palindrome";

describe("Palindrome Tests", () => {
  it("should return true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
