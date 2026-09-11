import "./Issues.css";

function Issues({ setPage }) {
  const issues = [
    {
      icon: "🎯",
      title: "Gender Stereotypes",
      text: "People may experience expectations about what men and women should do based only on gender."
    },
    {
      icon: "🚫",
      title: "Gender Discrimination",
      text: "Discrimination can occur when people receive unfair treatment because of their gender."
    },
    {
      icon: "💼",
      title: "Workplace Equality",
      text: "Fair treatment, equal opportunities, safe workplaces, and respect are important for workers."
    },
    {
      icon: "🏫",
      title: "Equal Education",
      text: "Everyone should have opportunities to study, develop skills, and achieve educational goals."
    },
    {
      icon: "📺",
      title: "Media Representation",
      text: "Media portrayals can reinforce stereotypes or help challenge traditional ideas about gender."
    },
    {
      icon: "⚖️",
      title: "Gender Inequality",
      text: "Unequal access to resources, opportunities, decision-making, and social participation can affect individuals and communities."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Gender Issues and Realities
      </h1>

      <p className="section-description">
        Understanding gender issues allows us to identify stereotypes,
        discrimination, unequal opportunities, and other challenges
        experienced in society.
      </p>

      <div className="card-grid">
        {issues.map((issue, index) => (
          <div className="issue-card" key={index}>
            <div className="issue-icon">
              {issue.icon}
            </div>

            <h3>{issue.title}</h3>

            <p>{issue.text}</p>
          </div>
        ))}
      </div>

      <div className="equality-banner">
        <h2>💙💗 Equality Starts With Understanding</h2>

        <p>
          Gender should not limit a person's ability to learn, work,
          lead, care for others, or pursue their goals.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("comparison")}
      >
        Analyze Past and Present →
      </button>
    </section>
  );
}

export default Issues;