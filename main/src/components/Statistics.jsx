import "./Statistics.css";

function Statistics({ setPage }) {
  const statistics = [
    {
      icon: "👩‍💼",
      value: "49%",
      label: "Women in the Labor Force",
      description:
        "Approximate share of Filipino women participating in the labor force.",
    },
    {
      icon: "🏛️",
      value: "27%",
      label: "Women in Congress",
      description:
        "Approximate share of seats held by women in the Philippine Congress.",
    },
    {
      icon: "🎓",
      value: "≈ 50%",
      label: "Education Access",
      description:
        "Girls and boys have roughly equal access to basic and higher education.",
    },
    {
      icon: "💼",
      value: "40%",
      label: "Women in Management",
      description:
        "Approximate share of managerial positions held by women.",
    },
    {
      icon: "🏠",
      value: "3×",
      label: "Unpaid Household Work",
      description:
        "Women often spend significantly more time on unpaid household and care work than men.",
    },
    {
      icon: "⚖️",
      value: "0.79",
      label: "Gender Equality Index",
      description:
        "Approximate score in global gender equality measurements.",
    },
  ];

  return (
    <section className="page statistics-page">

      {/* HEADER */}
      <div className="stats-header">

        <span className="stats-badge">
          MCO 1 • PHILIPPINE GENDER STATISTICS
        </span>

        <h1 className="section-title">
          Gender Statistics in the Philippines
        </h1>

        <p className="section-description">
          These figures give a numerical picture of how gender roles
          and opportunities are distributed among Filipinos today.
          Percentages help us measure both progress and continuing
          inequalities.
        </p>

      </div>


      {/* STATISTICS GRID */}
      <div className="stats-grid">

        {statistics.map((stat, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-value">
              {stat.value}
            </div>

            <h3 className="stat-label">
              {stat.label}
            </h3>

            <p className="stat-description">
              {stat.description}
            </p>

          </div>

        ))}

      </div>


      {/* INTERPRETATION */}
      <div className="stats-analysis">

        <span className="stats-analysis-label">
          CRITICAL ANALYSIS
        </span>

        <h2>
          What Do These Numbers Tell Us?
        </h2>

        <p>
          The numbers show that Filipino women and men now participate
          in many of the same areas — education, employment, and public
          life. At the same time, women remain underrepresented in some
          leadership positions and continue to carry a larger share of
          unpaid household work.
        </p>

        <p>
          Statistics alone do not explain why these differences exist.
          Culture, family expectations, economic conditions, and social
          norms all influence the opportunities available to different
          people. Understanding the numbers helps us ask better
          questions about fairness and equality.
        </p>

      </div>


      {/* REMINDER */}
      <div className="stats-note">

        <h2>⚠️ Important Reminder</h2>

        <p>
          The percentages shown above are approximate placeholders
          used for layout purposes. Before submitting this project,
          replace them with the exact figures from official sources
          such as:
        </p>

        <ul>
          <li>Philippine Statistics Authority (PSA)</li>
          <li>Philippine Commission on Women (PCW)</li>
          <li>World Bank Gender Data Portal</li>
          <li>UN Gender Inequality Index</li>
        </ul>

        <p>
          Always include the year of the data and the specific report
          or publication where each figure came from.
        </p>

      </div>


      {/* BACK BUTTON */}
      <button
        className="secondary-btn back-btn"
        onClick={() => setPage("home")}
      >
        ← Back to Home
      </button>

    </section>
  );
}

export default Statistics;