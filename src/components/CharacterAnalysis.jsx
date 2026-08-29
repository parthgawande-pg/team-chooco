function CharacterAnalysis({ analysis }) {
  const checks = [
    {
      label: "Lowercase letters",
      value: analysis.lowercase,
    },
    {
      label: "Uppercase letters",
      value: analysis.uppercase,
    },
    {
      label: "Numbers",
      value: analysis.numbers,
    },
    {
      label: "Special characters",
      value: analysis.symbols,
    },
  ];

  return (
    <div className="analysis-card">
      <h2>Character Analysis</h2>

      <div className="length-info">
        <span>Password Length</span>
        <strong>{analysis.length}</strong>
      </div>

      {checks.map((check) => (
        <div className="check-row" key={check.label}>
          <span>{check.label}</span>

          <span className={check.value ? "success" : "danger"}>
            {check.value ? "✓ Detected" : "✗ Missing"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CharacterAnalysis;