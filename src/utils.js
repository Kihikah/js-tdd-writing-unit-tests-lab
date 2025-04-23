export function isPalindrome(word) {
    if (typeof word !== "string") throw new Error("Input must be a string");
    if (!/^[A-Za-z]+$/.test(word)) throw new Error("Input must only contain alphabetic characters");
    if (word === "") return false;
  
    const normalized = word.toLowerCase();
    return normalized === normalized.split("").reverse().join("");
  }
  