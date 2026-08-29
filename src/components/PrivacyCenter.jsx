function PrivacyCenter() {
  return (
    <div className="privacy-card">

      <div className="privacy-header">
        <div className="privacy-icon">
          🔒
        </div>

        <div>
          <h2>Privacy Center</h2>
          <p>
            Your password is analyzed locally in
            your browser.
          </p>
        </div>
      </div>


      <div className="privacy-grid">

        <div className="privacy-item">
          <span>Password transmitted</span>
          <strong>0 bytes</strong>
        </div>

        <div className="privacy-item">
          <span>External API requests</span>
          <strong>0</strong>
        </div>

        <div className="privacy-item">
          <span>Server processing</span>
          <strong>OFF</strong>
        </div>

        <div className="privacy-item">
          <span>Local analysis</span>
          <strong>✓ ACTIVE</strong>
        </div>

        <div className="privacy-item">
          <span>Password storage</span>
          <strong>NONE</strong>
        </div>

        <div className="privacy-item">
          <span>Network dependency</span>
          <strong>NONE</strong>
        </div>

      </div>


      <div className="privacy-note">
        <span>🛡️</span>

        <p>
          PasswordShield performs password analysis
          entirely on your device. Your password is
          not uploaded, stored, or sent to an external
          server.
        </p>
      </div>

    </div>
  );
}

export default PrivacyCenter;