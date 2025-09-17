interface PalindromeRule {
  isValid(str: string): boolean;
}

class EmptyStringRule implements PalindromeRule {
  isValid(str: string): boolean {
    return str.length === 0;
  }
}

class SingleCharacterRule implements PalindromeRule {
  isValid(str: string): boolean {
    return str.length === 1;
  }
}

class GeneralPalindromeRule implements PalindromeRule {
  isValid(str: string): boolean {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  }
}

const removeNonAlphanumeric = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};

const rules: PalindromeRule[] = [
  new EmptyStringRule(),
  new SingleCharacterRule(),
  new GeneralPalindromeRule(),
];

export function isPalindrome(str: string): boolean {
  return rules.some((rule) => rule.isValid(removeNonAlphanumeric(str)));
}
