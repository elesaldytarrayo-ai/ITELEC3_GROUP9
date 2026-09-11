import "./Historical.css";

function Historical({ setPage }) {
  const periods = [
    {
      year: "Pre-Colonial",
      icon: "🌿",
      title: "Balanced Roles",
      text: "Many pre-colonial communities recognized important roles for both men and women. Women could participate in trade, leadership, spiritual activities, and community decisions."
    },
    {
      year: "Spanish Period",
      icon: "⛪",
      title: "Traditional Expectations",
      text: "Colonial influence strengthened traditional expectations of women as homemakers while men were commonly expected to provide for the family."
    },
    {
      year: "American Period",
      icon: "📚",
      title: "Education and Change",
      text: "Access to formal education expanded. More women entered schools and professional spaces, creating new opportunities."
    },
    {
      year: "Post-War Period",
      icon: "🏠",
      title: "Family and Work",
      text: "Women increasingly participated in employment and public life while family responsibilities continued to shape expectations."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">Historical Gender Roles</h1>

      <p className="section-description">
        Gender roles in the Philippines have changed over time because of
        culture, religion, education, colonization, economic development,
        and social movements.
      </p>

      <div className="timeline">
        {periods.map((period, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{period.icon}</div>

            <div className="timeline-content">
              <span>{period.year}</span>
              <h2>{period.title}</h2>
              <p>{period.text}</p>
            </div>
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

export default Historical;