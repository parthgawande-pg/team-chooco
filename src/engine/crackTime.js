export function estimateCrackTime(entropy) {
  if (entropy <= 0) {
    return {
      seconds: 0,
      label: "Instant",
    };
  }

  // Example offline attacker rate:
  // 10 billion guesses per second
  const guessesPerSecond = 10_000_000_000;

  const possiblePasswords = Math.pow(2, entropy);

  // Average case ≈ half the search space
  const seconds =
    possiblePasswords /
    (2 * guessesPerSecond);

  return {
    seconds,
    label: formatTime(seconds),
  };
}

function formatTime(seconds) {
  if (seconds < 1) {
    return "Less than a second";
  }

  if (seconds < 60) {
    return `${Math.round(seconds)} seconds`;
  }

  if (seconds < 3600) {
    return `${Math.round(seconds / 60)} minutes`;
  }

  if (seconds < 86400) {
    return `${Math.round(seconds / 3600)} hours`;
  }

  if (seconds < 31557600) {
    return `${Math.round(seconds / 86400)} days`;
  }

  if (seconds < 3155760000) {
    return `${Math.round(seconds / 31557600)} years`;
  }

  return "Millions of years";
}