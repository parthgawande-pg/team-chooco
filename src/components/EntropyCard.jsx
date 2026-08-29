function EntropyCard({ analysis }) {
  return (
    <div className="analysis-card">
      <h2>Entropy & Crack Resistance</h2>

      <div className="entropy-details">

        <div>
          <span>Theoretical Entropy</span>
          <strong>
            {analysis.entropy} bits
          </strong>
        </div>

        <div>
          <span>Effective Entropy</span>
          <strong>
            {analysis.effectiveEntropy} bits
          </strong>
        </div>

      </div>

      <div className="entropy-bar">
        <div
          className="entropy-fill"
          style={{
            width: `${Math.min(
              analysis.effectiveEntropy,
              100
            )}%`,
          }}
        />
      </div>

      <div className="entropy-details">

        <div>
          <span>Character Pool</span>
          <strong>
            {analysis.poolSize}
          </strong>
        </div>

        <div>
          <span>Password Length</span>
          <strong>
            {analysis.length}
          </strong>
        </div>

      </div>

      <div className="crack-time">
        <span>
          Estimated offline crack time
        </span>

        <strong>
          {analysis.crackTime}
        </strong>
      </div>

      {analysis.effectiveEntropy <
        analysis.entropy && (
          <p className="warning-message">
            ⚠ Predictable patterns reduced
            the effective security of this password.
          </p>
        )}

      <p className="disclaimer">
        This is an illustrative estimate. Actual
        resistance depends on the attack method,
        hashing algorithm and attacker resources.
      </p>
    </div>
  );
}

export default EntropyCard;