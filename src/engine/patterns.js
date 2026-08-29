// Common passwords
const COMMON_PASSWORDS = [
  "password",
  "123456",
  "123456789",
  "12345678",
  "qwerty",
  "abc123",
  "password123",
  "admin",
  "welcome",
  "letmein",
  "monkey",
  "dragon",
  "football",
  "iloveyou",
  "login",
  "pass",
  "test",
];

// Common leetspeak substitutions
const SUBSTITUTIONS = {
  "@": "a",
  "4": "a",
  "3": "e",
  "1": "i",
  "!": "i",
  "0": "o",
  "$": "s",
  "5": "s",
  "7": "t",
};

// Detect common password
export function detectCommonPassword(password) {
  const normalized = password.toLowerCase();

  return COMMON_PASSWORDS.some(
    (item) => normalized === item
  );
}

// Detect sequential characters
export function detectSequence(password) {
  if (password.length < 3) {
    return false;
  }

  let ascending = 1;
  let descending = 1;

  for (let i = 1; i < password.length; i++) {
    const previous = password.charCodeAt(i - 1);
    const current = password.charCodeAt(i);

    if (current === previous + 1) {
      ascending++;
    } else {
      ascending = 1;
    }

    if (current === previous - 1) {
      descending++;
    } else {
      descending = 1;
    }

    if (ascending >= 3 || descending >= 3) {
      return true;
    }
  }

  return false;
}

// Detect repeated characters
export function detectRepeatedCharacters(password) {
  if (password.length < 3) {
    return false;
  }

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      return true;
    }
  }

  return false;
}

// Detect repeated substrings
export function detectRepeatedPattern(password) {
  for (let size = 1; size <= Math.floor(password.length / 2); size++) {
    const first = password.substring(0, size);
    const second = password.substring(size, size * 2);

    if (first === second) {
      return true;
    }
  }

  return false;
}

// Detect predictable years
export function detectYear(password) {
  return /(19|20)\d{2}/.test(password);
}

// Convert predictable substitutions
function normalizeSubstitutions(password) {
  return password
    .toLowerCase()
    .split("")
    .map((character) => {
      return SUBSTITUTIONS[character] || character;
    })
    .join("");
}

// Detect predictable substitutions
export function detectSubstitution(password) {
  const normalized = password
    .toLowerCase()
    .replace(/@/g, "a")
    .replace(/4/g, "a")
    .replace(/3/g, "e")
    .replace(/1/g, "i")
    .replace(/!/g, "i")
    .replace(/0/g, "o")
    .replace(/\$/g, "s")
    .replace(/5/g, "s")
    .replace(/7/g, "t");

  const predictableWords = [
    "password",
    "qwerty",
    "admin",
    "welcome",
    "letmein",
  ];

  return predictableWords.some((word) =>
    normalized.includes(word)
  );
}
// Detect keyboard patterns
export function detectKeyboardPattern(password) {
  const keyboardPatterns = [
    "qwerty",
    "asdfgh",
    "zxcvbn",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
    "123456",
    "1234567890",
  ];

  const normalized = password.toLowerCase();

  return keyboardPatterns.some(
    (pattern) => normalized.includes(pattern)
  );
}