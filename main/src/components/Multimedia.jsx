import "./Multimedia.css";

function Multimedia({ setPage }) {
  return (
    <section className="page">
      <h1 className="section-title">
        Multimedia Section
      </h1>

      <p className="section-description">
        Multimedia materials help explain gender roles through
        visual information, historical resources, videos, and
        educational materials.
      </p>

      <div className="media-grid">
        <div className="media-card">
          <div className="media-icon">🎬</div>

          <h2>Educational Video</h2>

          <p>
            Include a relevant educational video about gender
            equality, gender roles, Filipino society, or women's
            participation in Philippine history.
          </p>

          <div className="video-placeholder">
            <span>▶</span>
            <p>Video Area</p>
          </div>

          <p className="media-note">
            Replace this area with your selected educational
            YouTube video embed.
          </p>
        </div>

        <div className="media-card">
          <div className="media-icon">📊</div>

          <h2>Infographic</h2>

          <p>
            Add an infographic showing information such as women's
            participation in education, employment, leadership,
            or other gender-related Philippine data.
          </p>

          <div className="chart">
            <div>
              <span>Education</span>
              <div className="bar">
                <i style={{ width: "85%" }}></i>
              </div>
            </div>

            <div>
              <span>Workplace</span>
              <div className="bar">
                <i style={{ width: "70%" }}></i>
              </div>
            </div>

            <div>
              <span>Leadership</span>
              <div className="bar">
                <i style={{ width: "60%" }}></i>
              </div>
            </div>
          </div>

          <p className="media-note">
            These visual bars are illustrative. Replace them with
            properly sourced Philippine statistics for submission.
          </p>
        </div>

        <div className="media-card">
          <div className="media-icon">🖼️</div>

          <h2>Historical Images</h2>

          <p>
            Add properly credited historical photographs,
            illustrations, documents, or other visual materials
            that support the historical discussion.
          </p>

          <div className="image-placeholder">
            <span>🖼️</span>
            <p>Historical Image Area</p>
          </div>
        </div>

        <div className="media-card">
          <div className="media-icon">📜</div>

          <h2>Timeline Visual</h2>

          <p>
            The timeline connects important historical periods
            and demonstrates how gender expectations changed over
            time.
          </p>

          <div className="mini-timeline">
            <span>Pre-Colonial</span>
            <span>Spanish</span>
            <span>American</span>
            <span>Post-War</span>
            <span>Today</span>
          </div>
        </div>
      </div>

      <div className="media-warning">
        <h2>Important</h2>

        <p>
          All images, videos, charts, and other borrowed materials
          must be properly credited in the References section.
          Multimedia should support the academic content rather
          than simply decorate the website.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("reflection")}
      >
        Go to Reflection →
      </button>
    </section>
  );
}

export default Multimedia;