function AttackSimulation({ analysis }) {
  const attacks = [
    {
      name: "Common Password Attack",
      detected: analysis.commonPassword,
      description:
        "Checks whether the password resembles a commonly used password.",
    },
    {
      name: "Keyboard Pattern Attack",
      detected: analysis.keyboard,
      description:
        "Checks for predictable keyboard sequences such as qwerty-style patterns.",
    },
    {
      name: "Sequential Character Attack",
      detected: analysis.sequence,
      description:
        "Checks for predictable sequences such as 123, abc, or similar patterns.",
    },
    {
      name: "Repeated Pattern Attack",
      detected:
        analysis.repeatedCharacters ||
        analysis.repeatedPattern,
      description:
        "Checks for repeated characters or repeated character blocks.",
    },
    {
      name: "Predictable Year Attack",
      detected: analysis.year,
      description:
        "Checks for years or date-like values that attackers commonly prioritize.",
    },
    {
      name: "Character Substitution Attack",
      detected: analysis.substitution,
      description:
        "Checks for predictable substitutions such as @ for a or 0 for o.",
    },
  ];

  const detectedCount = attacks.filter(
    (attack) => attack.detected
  ).length;

  return (
    <div className="analysis-card attack-card">

      <div className="attack-header">
        <div className="attack-icon">
          🛡️
        </div>

        <div>
          <h2>Attack Simulation</h2>

          <p>
            Defensive analysis of predictable attack paths
          </p>
        </div>
      </div>

      <div className="attack-summary">

        <strong>
          {detectedCount}
        </strong>

        <span>
          predictable attack patterns detected
        </span>

      </div>

      <div className="attack-list">

        {attacks.map((attack, index) => (

          <div
            className="attack-item"
            key={index}
          >

            <div className="attack-status">

              {attack.detected ? (
                <span className="attack-danger">
                  ⚠ DETECTED
                </span>
              ) : (
                <span className="attack-safe">
                  ✓ NOT DETECTED
                </span>
              )}

            </div>

            <div className="attack-info">

              <h3>
                {attack.name}
              </h3>

              <p>
                {attack.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="attack-disclaimer">
        This simulation identifies predictable
        constructions. It does not perform real
        password cracking or send your password
        anywhere.
      </div>

    </div>
  );
}

export default AttackSimulation;