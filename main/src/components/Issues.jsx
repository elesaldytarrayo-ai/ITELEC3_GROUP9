import "./Issues.css";

function Issues({ setPage }) {
  const issues = [
    {
      icon: "🎯",
      title: "Gender Stereotypes",
      text: "People may still experience expectations about what men and women should do based only on gender."
    },
    {
      icon: "💼",
      title: "Workplace Equality",
      text: "Equal opportunities, fair treatment, and respect are important in the workplace."
    },
    {
      icon: "🏫",
      title: "Education",
      text: "Everyone should have opportunities to study, develop skills, and achieve their educational goals."
    },
    {
      icon: "🏠",
      title: "Household Roles",
      text: "Household responsibilities can be shared instead of automatically assigned according to gender."
    },
    {
      icon: "🗣️",
      title: "Social Expectations",
      text: "Family, culture, media, and society can influence how people understand gender roles."
    },
    {
      icon: "🤝",
      title: "Respect and Equality",
      text: "Respecting people regardless of gender helps create a safer and more inclusive society."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Gender Issues in Society
      </h1>

      <p className="section-description">
        Understanding gender issues helps us recognize stereotypes and
        identify ways society can promote fairness and equal opportunities.
      </p>

      <div className="card-grid">
        {issues.map((issue, index) => (
          <div className="issue-card" key={index}>
            <div className="issue-icon">{issue.icon}</div>

            <h3>{issue.title}</h3>

            <p>{issue.text}</p>
          </div>
        ))}
      </div>

      <div className="equality-banner">
        <h2>💙💗 Equality Starts With Understanding</h2>
        <p>
          Gender should not limit a person's ability to learn, work,
          lead, care for others, or pursue their dreams.
        </p>
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

export default Issues;