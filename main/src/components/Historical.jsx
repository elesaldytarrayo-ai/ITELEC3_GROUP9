import "./Historical.css";

function Historical({ setPage }) {
  const periods = [
    {
      year: "Before 1565",
      period: "Pre-Colonial Philippines",
      icon: "🌿",
      title: "Diverse and Important Roles",
      text: "Many communities had important roles for women and men in agriculture, trade, family life, leadership, and spiritual practices. Some women could become traders, community leaders, or spiritual figures."
    },
    {
      year: "1565–1898",
      period: "Spanish Colonial Period",
      icon: "⛪",
      title: "Stronger Traditional Expectations",
      text: "Spanish colonial culture and religious influence contributed to stronger expectations that women should focus on family and domestic responsibilities, while men were commonly associated with authority and providing for the household."
    },
    {
      year: "1898–1946",
      period: "American Period",
      icon: "📚",
      title: "Education and New Opportunities",
      text: "The expansion of formal education created additional opportunities for Filipino women and men. More women entered schools and eventually participated in professional and public life."
    },
    {
      year: "1946–1986",
      period: "Post-War Philippines",
      icon: "🏠",
      title: "Family, Work, and Public Life",
      text: "Family expectations remained important, while women increasingly participated in employment, education, politics, and other areas of public life."
    },
    {
      year: "1986–Present",
      period: "Contemporary Philippines",
      icon: "🌏",
      title: "Changing Gender Expectations",
      text: "Women and men increasingly participate in different careers, leadership roles, education, family responsibilities, and community activities. However, gender stereotypes and inequalities continue to exist."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Historical Perspective
      </h1>

      <p className="section-description">
        Philippine gender roles have developed through changes in
        culture, colonization, education, economy, politics, and
        social movements.
      </p>

      <div className="timeline">
        {periods.map((period, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              {period.icon}
            </div>

            <div className="timeline-content">
              <span>{period.year}</span>
              <small>{period.period}</small>
              <h2>{period.title}</h2>
              <p>{period.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="historical-note">
        <h2>Historical Insight</h2>
        <p>
          Gender roles were never completely the same in every
          Filipino community. Historical experiences differed by
          region, social class, culture, and period. Therefore,
          Philippine gender history should be understood as diverse
          rather than as one single experience.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("figures")}
      >
        Explore Key Figures →
      </button>
    </section>
  );
}

export default Historical;