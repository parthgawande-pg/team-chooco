import {
  detectCommonPassword,
  detectSequence,
  detectRepeatedCharacters,
  detectRepeatedPattern,
  detectYear,
  detectSubstitution,
  detectKeyboardPattern,
} from "./patterns";

import { calculateEntropy } from "./entropy";
import { estimateCrackTime } from "./crackTime";


export function analyzePassword(password) {

  // Empty password
  if (!password) {
    return {
      length: 0,

      lowercase: false,
      uppercase: false,
      numbers: false,
      symbols: false,

      commonPassword: false,
      sequence: false,
      repeatedCharacters: false,
      repeatedPattern: false,
      year: false,
      substitution: false,
      keyboard: false,

      entropy: 0,
      effectiveEntropy: 0,
      poolSize: 0,

      crackTime: "Instant",
      crackTimeSeconds: 0,

      score: 0,
      rating: "EMPTY",
    };
  }


  // ==========================================
  // 1. BASIC CHARACTER ANALYSIS
  // ==========================================

  const length = password.length;

  const lowercase = /[a-z]/.test(password);

  const uppercase = /[A-Z]/.test(password);

  const numbers = /[0-9]/.test(password);

  const symbols = /[^A-Za-z0-9]/.test(password);


  // ==========================================
  // 2. PREDICTABLE PATTERN DETECTION
  // ==========================================

  const commonPassword =
    detectCommonPassword(password);

  const sequence =
    detectSequence(password);

  const repeatedCharacters =
    detectRepeatedCharacters(password);

  const repeatedPattern =
    detectRepeatedPattern(password);

  const year =
    detectYear(password);

  const substitution =
    detectSubstitution(password);

  const keyboard =
    detectKeyboardPattern(password);


  // ==========================================
  // 3. THEORETICAL ENTROPY
  // ==========================================

  const entropyData =
    calculateEntropy(password);


  // ==========================================
  // 4. PATTERN-ADJUSTED ENTROPY
  // ==========================================

  let effectiveEntropy =
    entropyData.entropy;


  if (commonPassword) {
    effectiveEntropy -= 35;
  }

  if (keyboard) {
    effectiveEntropy -= 15;
  }

  if (sequence) {
    effectiveEntropy -= 10;
  }

  if (repeatedCharacters) {
    effectiveEntropy -= 10;
  }

  if (repeatedPattern) {
    effectiveEntropy -= 10;
  }

  if (year) {
    effectiveEntropy -= 8;
  }

  if (substitution) {
    effectiveEntropy -= 15;
  }


  // Never allow negative entropy

  effectiveEntropy = Math.max(
    0,
    Math.round(effectiveEntropy * 10) / 10
  );


  // ==========================================
  // 5. CRACK TIME
  // ==========================================

  const adjustedCrackTime =
    estimateCrackTime(effectiveEntropy);


  // ==========================================
  // 6. SECURITY SCORE
  // ==========================================

  let score = 0;


  // Password length

  if (length >= 8) {
    score += 15;
  }

  if (length >= 12) {
    score += 15;
  }

  if (length >= 16) {
    score += 15;
  }

  if (length >= 20) {
    score += 10;
  }


  // Character variety

  if (lowercase) {
    score += 10;
  }

  if (uppercase) {
    score += 10;
  }

  if (numbers) {
    score += 10;
  }

  if (symbols) {
    score += 10;
  }


  // ==========================================
  // 7. PATTERN PENALTIES
  // ==========================================

  if (commonPassword) {
    score -= 45;
  }

  if (keyboard) {
    score -= 20;
  }

  if (sequence) {
    score -= 15;
  }

  if (repeatedCharacters) {
    score -= 10;
  }

  if (repeatedPattern) {
    score -= 15;
  }

  if (year) {
    score -= 8;
  }

  if (substitution) {
    score -= 20;
  }


  // Keep score between 0 and 100

  score = Math.max(
    0,
    Math.min(score, 100)
  );


  // ==========================================
  // 8. SECURITY RATING
  // ==========================================

  let rating;


  if (score < 20) {

    rating = "CRITICAL";

  } else if (score < 40) {

    rating = "WEAK";

  } else if (score < 60) {

    rating = "MODERATE";

  } else if (score < 80) {

    rating = "STRONG";

  } else {

    rating = "VERY STRONG";

  }


  // ==========================================
  // 9. RETURN COMPLETE ANALYSIS
  // ==========================================

  return {

    // Basic information

    length,

    lowercase,
    uppercase,
    numbers,
    symbols,


    // Pattern detection

    commonPassword,
    sequence,
    repeatedCharacters,
    repeatedPattern,
    year,
    substitution,
    keyboard,


    // Entropy

    entropy: entropyData.entropy,

    effectiveEntropy,

    poolSize: entropyData.poolSize,


    // Crack resistance

    crackTime:
      adjustedCrackTime.label,

    crackTimeSeconds:
      adjustedCrackTime.seconds,


    // Final score

    score,

    rating,
  };
}