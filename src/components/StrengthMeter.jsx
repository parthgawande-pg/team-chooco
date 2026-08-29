function StrengthMeter({ score, rating }) {
  return (
    <div className="strength-card">
      <div className="card-header">
        <span>Security Score</span>
        <span>{score}/100</span>
      </div>

      <div className="meter">
        <div
          className="meter-fill"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      <div className="rating">
        {rating}
      </div>
    </div>
  );
}

export default StrengthMeter;