import "./Comparison.css";

function Comparison({ setPage }) {
  const comparisons = [
    {
      topic: "Family",
      past: "Traditional expectations often assigned women more household and caregiving responsibilities.",
      present: "Some families increasingly share household and caregiving responsibilities."
    },
    {
      topic: "Work",
      past: "Certain occupations were strongly associated with particular genders.",
      present: "Women and men participate in many different professions."
    },
    {
      topic: "Education",
      past: "Educational opportunities were more limited for many people, especially women in earlier periods.",
      present: "Women and men have broad access to formal education, although inequalities can still exist."
    },
    {
      topic: "Leadership",
      past: "Leadership was often influenced by traditional social expectations.",
      present: "Women and men participate in leadership positions in different sectors."
    },
    {
      topic: "Media",
      past: "Traditional portrayals often emphasized conventional masculine and feminine roles.",
      present: "Media includes more diverse representations, although stereotypes remain."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Analysis: Past vs. Present
      </h1>

      <p className="section-description">
        Comparing different periods helps us understand changes in
        Philippine gender roles and identify challenges that continue
        today.
      </p>

      <div className="comparison-container">
        <div className="comparison-header">
          <div>Topic</div>
          <div>Historical Perspective</div>
          <div>Contemporary Perspective</div>
        </div>

        {comparisons.map((item, index) => (
          <div className="comparison-row" key={index}>
            <strong>{item.topic}</strong>
            <p>{item.past}</p>
            <p>{item.present}</p>
          </div>
        ))}
      </div>

      <div className="analysis-box">
        <h2>Our Critical Analysis</h2>

        <p>
          Philippine gender roles have changed significantly over
          time. Education, economic development, political participation,
          social movements, and changing family structures have created
          more opportunities for women and men.
        </p>

        <p>
          However, progress does not mean that all gender inequalities
          have disappeared. Stereotypes, discrimination, unequal
          responsibilities, and differences in representation may still
          affect people. Understanding these continuing challenges is
          important in creating a more respectful and inclusive society.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("multimedia")}
      >
        View Multimedia →
      </button>
    </section>
  );
}

export default Comparison;