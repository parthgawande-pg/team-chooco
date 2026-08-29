function PatternAnalysis({ analysis }) {
  const patterns = [
    {
      name: "Common Password",
      detected: analysis.commonPassword,
    },
    {
      name: "Keyboard Pattern",
      detected: analysis.keyboard,
    },
    {
      name: "Sequential Characters",
      detected: analysis.sequence,
    },
    {
      name: "Repeated Characters",
      detected: analysis.repeatedCharacters,
    },
    {
      name: "Repeated Pattern",
      detected: analysis.repeatedPattern,
    },
    {
      name: "Predictable Year",
      detected: analysis.year,
    },
    {
      name: "Predictable Substitution",
      detected: analysis.substitution,
    },
  ];

  return (
    <div className="analysis-card">
      <h2>Pattern Analysis</h2>

      {patterns.map((pattern) => (
        <div
          className="check-row"
          key={pattern.name}
        >
          <span>{pattern.name}</span>

          <span
            className={
              pattern.detected
                ? "danger"
                : "success"
            }
          >
            {pattern.detected
              ? "⚠ Detected"
              : "✓ Not Detected"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PatternAnalysis;