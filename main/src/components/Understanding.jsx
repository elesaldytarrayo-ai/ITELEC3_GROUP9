import "./Understanding.css";

function Understanding({ setPage }) {
  const concepts = [
    {
      icon: "👥",
      title: "What Are Gender Roles?",
      text: "Gender roles are social expectations about how people are expected to behave, work, communicate, and participate in family and society based on gender."
    },
    {
      icon: "🧬",
      title: "Biological Sex",
      text: "Biological sex refers to physical and biological characteristics such as reproductive anatomy, chromosomes, and hormones."
    },
    {
      icon: "🌱",
      title: "Gender",
      text: "Gender refers to socially and culturally influenced identities, expectations, behaviors, and roles associated with people."
    },
    {
      icon: "🏘️",
      title: "Why Study Gender Roles?",
      text: "Studying gender roles helps society understand stereotypes, recognize inequality, and promote fair opportunities and respectful relationships."
    }
  ];

  return (
    <section className="page understanding-page">
      <h1 className="section-title">
        Understanding Gender Roles
      </h1>

      <p className="section-description">
        Gender roles are influenced by culture, family, history,
        education, religion, media, economics, and other social
        factors. They can change as society changes.
      </p>

      <div className="card-grid">
        {concepts.map((concept, index) => (
          <div className="info-card" key={index}>
            <div className="icon">{concept.icon}</div>
            <h3>{concept.title}</h3>
            <p>{concept.text}</p>
          </div>
        ))}
      </div>

      <div className="important-box">
        <h2>Why Is This Important?</h2>

        <p>
          Understanding gender roles allows us to question unfair
          expectations and recognize that abilities and responsibilities
          should not be limited by stereotypes.
        </p>

        <ul>
          <li>Promotes respect among people.</li>
          <li>Helps identify discrimination.</li>
          <li>Encourages equal opportunities.</li>
          <li>Supports shared family and community responsibilities.</li>
          <li>Helps people make informed choices about their lives.</li>
        </ul>
      </div>

      <button
        className="secondary-btn back-btn"
        onClick={() => setPage("home")}
      >
        ← Back to Home
      </button>
    </section>
  );
}

export default Understanding;