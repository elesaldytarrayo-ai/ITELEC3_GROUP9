import "./KeyFigures.css";

function KeyFigures({ setPage }) {
  const figures = [
    {
      name: "Gabriela Silang",
      role: "Revolutionary Leader",
      icon: "👩",
      description:
        "Gabriela Silang became known as a revolutionary leader and symbol of women's participation in resistance and leadership during the colonial period."
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
        "Jose Rizal advocated education and social reform. His writings also discussed the importance of educating women and their role in society."
    },
    {
      name: "Filipino Changemakers",
      role: "Everyday Leaders",
      icon: "🤝",
      description:
        "Filipino women and men continue to challenge stereotypes through education, employment, family life, leadership, and community participation."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Key Figures and Changemakers
      </h1>

      <p className="section-description">
        Individuals and communities have contributed to changing
        ideas about gender, education, leadership, and social
        participation in the Philippines.
      </p>

      <div className="figure-grid">
        {figures.map((figure, index) => (
          <div className="figure-card" key={index}>
            <div className="figure-icon">
              {figure.icon}
            </div>

            <h2>{figure.name}</h2>

            <span>{figure.role}</span>

            <p>{figure.description}</p>
          </div>
        ))}
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("contemporary")}
      >
        Continue to Contemporary Roles →
      </button>
    </section>
  );
}

export default KeyFigures;