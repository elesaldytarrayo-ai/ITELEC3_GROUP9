import "./Home.css";

function Home({ setPage }) {
  return (
    <section className="home">
      <div className="home-content">
        <div className="badge">
          MCO 1 • Gender and Society
        </div>

        <h1>
          Critical Exploration and Creative Presentation of
          <span> Gender Roles in the Philippines</span>
        </h1>

        <p className="home-intro">
          This website explores how gender roles have developed
          throughout Philippine history and how they continue to
          influence Filipino families, education, workplaces, media,
          leadership, and communities today.
        </p>

        <div className="group-box">
          <h2>Group 6</h2>

          <p>
            <strong>Members:</strong>
          </p>

          <p>
            Sarmiento, Juliet Labanancia • Saucero, Remalyn Francisco • Senolos III, Budy Balandray
          </p>

          <p>
            Tarrayo, Elesaldy Jr. • Vellejos, Cristine Joy Berba • Velasco, Maria Fe Sintos
          </p>

          <p>
            Castillo, Mika Ella Manalangit
          </p>

          <p className="school-info">
            BSIT 3C • Northwest Samar State University
          </p>
        </div>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={() => setPage("understanding")}
          >
            Start Exploring
          </button>

          <button
            className="secondary-btn"
            onClick={() => setPage("historical")}
          >
            Explore History
          </button>
        </div>

        <div className="home-cards">
          <div className="mini-card">
            <span>📖</span>
            <h3>Understand</h3>
            <p>Learn what gender roles mean and why they matter.</p>
          </div>

          <div className="mini-card">
            <span>📜</span>
            <h3>Explore History</h3>
            <p>Discover how gender roles changed over time.</p>
          </div>

          <div className="mini-card">
            <span>⚖️</span>
            <h3>Think Critically</h3>
            <p>Examine issues, inequalities, and equal opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;