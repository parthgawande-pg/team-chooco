function PasswordInput({ password, setPassword }) {
  return (
    <div className="password-input-container">
      <label htmlFor="password">Enter your password</label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password to analyze..."
        autoComplete="off"
      />

      <p className="privacy-note">
        🔒 Your password is analyzed locally in your browser.
      </p>
    </div>
  );
}

export default PasswordInput;