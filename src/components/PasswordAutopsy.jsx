function PasswordAutopsy({ analysis }) {
  const findings = [];

  if (analysis.commonPassword) {
    findings.push({
      type: "danger",
      icon: "◉",
      title: "Common password",
      text: "This password resembles a commonly used credential."
    });
  }

  if (analysis.keyboard) {
    findings.push({
      type: "danger",
      icon: "⌨",
      title: "Keyboard pattern",
      text: "Characters follow a predictable keyboard layout."
    });
  }

  if (analysis.sequence) {
    findings.push({
      type: "warning",
      icon: "↗",
      title: "Sequential characters",
      text: "A predictable character sequence was detected."
    });
  }

  if (analysis.repeatedCharacters) {
    findings.push({
      type: "warning",
      icon: "⟳",
      title: "Repeated characters",
      text: "Repeated characters reduce the search space."
    });
  }

  if (analysis.repeatedPattern) {
    findings.push({
      type: "warning",
      icon: "▦",
      title: "Repeated pattern",
      text: "A repeating character block was detected."
    });
  }

  if (analysis.year) {
    findings.push({
      type: "warning",
      icon: "◷",
      title: "Predictable year",
      text: "A year or date-like value was detected."
    });
  }

  if (analysis.substitution) {
    findings.push({
      type: "warning",
      icon: "⇄",
      title: "Predictable substitution",
      text: "Common substitutions such as @, 0 or 1 were detected."
    });
  }

  const strengths = [];

  if (analysis.length >= 12) {
    strengths.push("Good password length");
  }

  if (analysis.lowercase) {
    strengths.push("Lowercase letters");
  }

  if (analysis.uppercase) {
    strengths.push("Uppercase letters");
  }

  if (analysis.numbers) {
    strengths.push("Numbers");
  }

  if (analysis.symbols) {
    strengths.push("Special characters");
  }

  const riskLevel =
    findings.length === 0
      ? "LOW"
      : findings.length <= 2
      ? "MEDIUM"
      : "HIGH";

  return (
    <section className="autopsy">

      {/* HEADER */}

      <div className="autopsy-header">

        <div className="autopsy-heading">

          <div className="autopsy-shield">
            <span>⌁</span>
          </div>

          <div>
            <div className="autopsy-label">
              SECURITY DIAGNOSTICS
            </div>

            <h2>Password Autopsy</h2>

            <p>
              Understand what makes this password
              predictable.
            </p>
          </div>

        </div>

        <div className={`risk-badge ${riskLevel.toLowerCase()}`}>
          <span className="risk-dot"></span>
          {riskLevel} RISK
        </div>

      </div>


      {/* MAIN GRID */}

      <div className="autopsy-grid">

        {/* STRENGTHS */}

        <div className="autopsy-panel strengths-panel">

          <div className="panel-top">

            <div className="panel-icon success">
              ✓
            </div>

            <div>
              <span>POSITIVE SIGNALS</span>
              <h3>What looks good</h3>
            </div>

          </div>

          <div className="strength-list">

            {strengths.length > 0 ? (
              strengths.map((item, index) => (
                <div
                  className="strength-row"
                  key={index}
                >
                  <span className="check">
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>
                </div>
              ))
            ) : (
              <div className="empty-state">
                No significant strengths detected.
              </div>
            )}

          </div>

        </div>


        {/* FINDINGS */}

        <div className="autopsy-panel findings-panel">

          <div className="panel-top">

            <div className="panel-icon warning">
              !
            </div>

            <div>
              <span>THREAT INTELLIGENCE</span>
              <h3>Predictability findings</h3>
            </div>

            <div className="finding-count">
              {findings.length}
            </div>

          </div>


          <div className="finding-list">

            {findings.length > 0 ? (

              findings.map((finding, index) => (

                <div
                  className={`finding-row ${finding.type}`}
                  key={index}
                >

                  <div className="finding-icon">
                    {finding.icon}
                  </div>

                  <div className="finding-content">

                    <strong>
                      {finding.title}
                    </strong>

                    <p>
                      {finding.text}
                    </p>

                  </div>

                  <div className="finding-arrow">
                    →
                  </div>

                </div>

              ))

            ) : (

              <div className="clean-result">

                <div className="clean-icon">
                  ✓
                </div>

                <div>
                  <strong>
                    No major patterns detected
                  </strong>

                  <p>
                    The password does not show the
                    predictable constructions checked
                    by PasswordShield.
                  </p>
                </div>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* VERDICT */}

      <div className="autopsy-verdict">

        <div className="verdict-line"></div>

        <div className="verdict-content">

          <div className="verdict-title">
            <span>FINAL ASSESSMENT</span>
            <strong>
              {analysis.rating}
            </strong>
          </div>

          <p>
            {analysis.effectiveEntropy <
            analysis.entropy
              ? "The password has characteristics that make it appear more complex than it actually is. Predictable constructions reduce its effective resistance against automated attacks."
              : "No major predictable construction was detected. The password's resistance is primarily determined by its length, character diversity and entropy."
            }
          </p>

        </div>

        <div className="verdict-score">
          <strong>
            {analysis.score}
          </strong>
          <span>/100</span>
        </div>

      </div>

    </section>
  );
}

export default PasswordAutopsy;