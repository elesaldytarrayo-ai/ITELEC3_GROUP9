import "./KeyFigures.css";

function KeyFigures({ setPage }) {
  const figures = [
    {
      name: "Gabriela Silang",
      role: "Revolutionary Leader",
      icon: "👩",
      description:
        "Gabriela Silang became known as a revolutionary leader and symbol of women's participation in resistance and leadership."
    },
    {
      name: "Corazon Aquino",
      role: "President of the Philippines",
      icon: "🇵🇭",
      description:
        "Corazon Aquino became the first woman president of the Philippines and an important figure in Philippine political history."
    },
    {
      name: "Jose Rizal",
      role: "National Hero",
      icon: "📖",
      description:
        "Jose Rizal advocated education and social reform and wrote about the importance of education and the role of women in society."
    },
    {
      name: "Filipino Women and Men",
      role: "Everyday Changemakers",
      icon: "🤝",
      description:
        "Ordinary Filipino women and men continue to challenge stereotypes through education, work, family life, and community involvement."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Key Figures and Changemakers
      </h1>

      <p className="section-description">
        Throughout Philippine history, many people have challenged
        traditional expectations and contributed to social change.
      </p>

      <div className="figure-grid">
        {figures.map((figure, index) => (
          <div className="figure-card" key={index}>
            <div className="figure-icon">{figure.icon}</div>

            <h2>{figure.name}</h2>

            <span>{figure.role}</span>

            <p>{figure.description}</p>
          </div>
        ))}
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

export default KeyFigures;