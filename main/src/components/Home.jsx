import "./Home.css";

function Home({ setPage }) {
  return (
    <section className="home">
      <div className="home-content">
        <div className="badge">
          MCO 1 • Philippine Context
        </div>

        <h1>
          Gender Roles in the
          <span> Philippines</span>
        </h1>

        <p>
          Explore how gender roles have changed throughout Philippine
          history and how they continue to influence Filipino society today.
        </p>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={() => setPage("historical")}
          >
            Explore History
          </button>

          <button
            className="secondary-btn"
            onClick={() => setPage("contemporary")}
          >
            View Modern Roles
          </button>
        </div>

        <div className="home-cards">
          <div className="mini-card">
            <span>📜</span>
            <h3>Historical</h3>
            <p>Discover gender roles in the past.</p>
          </div>

          <div className="mini-card">
            <span>🌏</span>
            <h3>Contemporary</h3>
            <p>Understand gender roles today.</p>
          </div>

          <div className="mini-card">
            <span>⚖️</span>
            <h3>Equality</h3>
            <p>Think about fairness and opportunity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;