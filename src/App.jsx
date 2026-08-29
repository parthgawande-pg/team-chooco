import { useState } from "react";

import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import CharacterAnalysis from "./components/CharacterAnalysis";
import PatternAnalysis from "./components/PatternAnalysis";
import EntropyCard from "./components/EntropyCard";
import { analyzePassword } from "./engine/analyzer";
import PasswordAutopsy from "./components/PasswordAutopsy";
import PrivacyCenter from "./components/PrivacyCenter";
import AttackSimulation from "./components/AttackSimulation";
import PrivacyMonitor from "./components/PrivacyMonitor";

function App() {
  const [password, setPassword] = useState("");

  const analysis = analyzePassword(password);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          🔐 PasswordShield
        </div>

        <div className="privacy-status">
          🟢 Local Processing
        </div>
      </header>

      <main className="container">

        <section className="hero">
          <div className="badge">
            PRIVACY-FIRST PASSWORD SECURITY
          </div>

          <h1>
            Understand Your Password's
            <span> Real Security</span>
          </h1>

          <p>
            Analyze password strength, entropy and predictable
            patterns without sending your password anywhere.
          </p>
        </section>

        <section className="input-section">
          <PasswordInput
            password={password}
            setPassword={setPassword}
          />
        </section>

        {password && (
          <>
            <section className="dashboard-grid">

              <StrengthMeter
                score={analysis.score}
                rating={analysis.rating}
              />

              <div className="stat-card">
                <span>Length</span>
                <strong>{analysis.length}</strong>
                <small>characters</small>
              </div>

              <div className="stat-card">
                <span>Character Types</span>

                <strong>
                  {
                    [
                      analysis.lowercase,
                      analysis.uppercase,
                      analysis.numbers,
                      analysis.symbols,
                    ].filter(Boolean).length
                  }
                </strong>

                <small>detected</small>
              </div>

            </section>

            <section className="analysis-grid">

  <CharacterAnalysis
    analysis={analysis}
  />

  <PatternAnalysis
    analysis={analysis}
  />

  <EntropyCard
    analysis={analysis}
  />
  <PrivacyMonitor />
  <AttackSimulation
  analysis={analysis}
/>
  <PasswordAutopsy analysis={analysis} />
  <PrivacyCenter />


</section>
          </>
        )}

      </main>
    </div>
  );
}

export default App;