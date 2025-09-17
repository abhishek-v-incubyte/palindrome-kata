interface PalindromeRule {
  isValid(str: string): boolean;
}

class EmptyStringRule implements PalindromeRule {
  isValid(str: string): boolean {
    return toGraphemes(removeNonAlphanumeric(str)).length === 0;
  }
}

class SingleCharacterRule implements PalindromeRule {
  isValid(str: string): boolean {
    return toGraphemes(removeNonAlphanumeric(str)).length === 1;
  }
}

class GeneralPalindromeRule implements PalindromeRule {
  isValid(str: string): boolean {
    const chars = toGraphemes(removeNonAlphanumeric(str));

    for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
      if (chars[i] !== chars[j]) return false;
    }
    return true;
  }
}

const removeNonAlphanumeric = (str: string): string => {
  // Remove all non-alphanumeric characters except emojis
  return str
    .toLowerCase()
    .split("")
    .filter((char) => {
      if (/[a-z0-9]/.test(char)) return true;
      if (char.charCodeAt(0) > 127) return true;

      return false;
    })
    .join("");
};

const toGraphemes = (str: string): string[] => {
  // Use Intl.Segmenter to properly split grapheme clusters (including emojis)
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const segments = segmenter.segment(str);
  return Array.from(segments, (segment) => segment.segment);
};

const rules: PalindromeRule[] = [
  new EmptyStringRule(),
  new SingleCharacterRule(),
  new GeneralPalindromeRule(),
];

export function isPalindrome(str: string): boolean {
  return rules.some((rule) => rule.isValid(str));
}
