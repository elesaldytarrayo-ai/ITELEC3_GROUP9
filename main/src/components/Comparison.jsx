import "./Comparison.css";

function Comparison({ setPage }) {
  const comparisons = [
    {
      topic: "Family",
      past: "Traditional expectations often placed women in household roles.",
      present: "Family responsibilities can be shared between partners."
    },
    {
      topic: "Work",
      past: "Certain occupations were strongly associated with one gender.",
      present: "Men and women can pursue many different professions."
    },
    {
      topic: "Education",
      past: "Educational opportunities were more limited for some groups.",
      present: "Education is widely available to both boys and girls."
    },
    {
      topic: "Leadership",
      past: "Leadership was often influenced by traditional social expectations.",
      present: "Women and men participate in leadership positions."
    },
    {
      topic: "Society",
      past: "Gender stereotypes were often strongly followed.",
      present: "People increasingly challenge stereotypes and promote equality."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Past vs. Present
      </h1>

      <p className="section-description">
        Comparing different periods helps us understand how Philippine
        society has changed and which gender expectations still exist.
      </p>

      <div className="comparison-container">
        <div className="comparison-header">
          <div>Topic</div>
          <div>Past</div>
          <div>Present</div>
        </div>

        {comparisons.map((item, index) => (
          <div className="comparison-row" key={index}>
            <strong>{item.topic}</strong>
            <p>{item.past}</p>
            <p>{item.present}</p>
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

export default Comparison;