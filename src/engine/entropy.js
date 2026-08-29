export function calculateEntropy(password) {
  if (!password) {
    return {
      poolSize: 0,
      entropy: 0,
    };
  }

  let poolSize = 0;

  if (/[a-z]/.test(password)) {
    poolSize += 26;
  }

  if (/[A-Z]/.test(password)) {
    poolSize += 26;
  }

  if (/[0-9]/.test(password)) {
    poolSize += 10;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    poolSize += 32;
  }

  const entropy =
    password.length *
    Math.log2(poolSize);

  return {
    poolSize,
    entropy: Math.round(entropy * 10) / 10,
  };
}