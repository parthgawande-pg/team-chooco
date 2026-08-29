import { useEffect, useState } from "react";

function PrivacyMonitor() {
  const [externalRequests, setExternalRequests] = useState(0);

  useEffect(() => {
    const checkNetworkActivity = () => {
      const resources =
        performance.getEntriesByType("resource");

      const external = resources.filter((resource) => {
        try {
          return (
            new URL(resource.name).origin !==
            window.location.origin
          );
        } catch {
          return false;
        }
      });

      setExternalRequests(external.length);
    };

    checkNetworkActivity();

    const interval = setInterval(
      checkNetworkActivity,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="privacy-monitor">

      <div className="privacy-monitor-header">
        <span className="privacy-monitor-icon">
          🛡️
        </span>

        <div>
          <h2>Privacy Monitor</h2>

          <p>
            Real-time browser-side privacy status
          </p>
        </div>
      </div>

      <div className="privacy-monitor-grid">

        <div className="monitor-item">
          <span>Analysis location</span>

          <strong>
            LOCAL BROWSER
          </strong>
        </div>

        <div className="monitor-item">
          <span>External resources</span>

          <strong>
            {externalRequests}
          </strong>
        </div>

        <div className="monitor-item">
          <span>Password storage</span>

          <strong>
            NONE
          </strong>
        </div>

        <div className="monitor-item">
          <span>Server processing</span>

          <strong>
            OFF
          </strong>
        </div>

      </div>

      <div className="privacy-status">
        {externalRequests === 0 ? (
          <>
            <span>🟢</span>

            <p>
              No external resources detected.
              Password analysis remains local.
            </p>
          </>
        ) : (
          <>
            <span>🟡</span>

            <p>
              External resources detected.
              These may be unrelated browser resources;
              inspect the Network panel before claiming
              zero network activity.
            </p>
          </>
        )}
      </div>

    </div>
  );
}

export default PrivacyMonitor;