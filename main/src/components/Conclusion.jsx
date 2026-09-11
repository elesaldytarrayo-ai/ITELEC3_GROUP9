import "./Conclusion.css";

function Conclusion({ setPage }) {
  return (
    <section className="page conclusion-page">
      <h1 className="section-title">
        Conclusion
      </h1>

      <p className="section-description">
        Our overall understanding of gender roles in the Philippine
        context.
      </p>

      <div className="conclusion-card">
        <div className="conclusion-icon">🌏</div>

        <h2>Our Overall Insight</h2>

        <p>
          Gender roles in the Philippines have changed throughout
          history. Before and during different colonial periods,
          Filipino communities developed different expectations
          about the responsibilities of women and men.
        </p>

        <p>
          Education, economic development, political participation,
          social movements, technology, and changing family
          structures have contributed to new opportunities and
          more flexible gender roles.
        </p>

        <p>
          However, stereotypes and inequalities continue to affect
          some individuals and communities. Gender expectations can
          influence career choices, family responsibilities,
          leadership opportunities, education, and how people are
          represented in media.
        </p>

        <p>
          Our group believes that understanding history and
          recognizing present-day realities can help people
          challenge unfair stereotypes. A more inclusive society
          can be developed when people are given respect, equal
          opportunities, and the freedom to contribute according
          to their abilities rather than assumptions based on
          gender.
        </p>
      </div>

      <div className="final-message">
        <h2>💙 Respect • 💗 Equality • 🟣 Inclusion</h2>

        <p>
          Gender should not determine the limits of a person's
          dreams, abilities, responsibilities, or opportunities.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("references")}
      >
        View References →
      </button>
    </section>
  );
}

export default Conclusion;