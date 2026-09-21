import "./References.css";

function References({ setPage }) {
  const references = [
    {
      category: "Government Sources",
      items: [
        "https://pcw.gov.ph/gender-and-statistics/",
        "https://psa.gov.ph/",
        "https://www.officialgazette.gov.ph/"
      ]
    },
    {
      category: "Historical and Academic Sources",
      items: [
        "https://tuklas.up.edu.ph/Record/UP-99796217604198412?",
        "https://press.up.edu.ph/product/working-women-of-manila-in-the-nineteenth-century-revised-edition/?",
        "https://www.jstor.org/action/doBasicSearch?Query=gender%20roles%20philippines"
      ]
    },
    {
      category: "Multimedia Sources",
      items: [
        "https://www.youtube.com/watch?v=Ulh0DnFUGsk"
      ]
    }
  ];

  return (
    <section className="page references-page">
      <h1 className="section-title">
        References
      </h1>

      <p className="section-description">
        The following sources should be replaced or completed with
        the exact materials used by the group.
      </p>

      <div className="reference-list">
        {references.map((reference, index) => (
          <div className="reference-card" key={index}>
            <h2>{reference.category}</h2>

            <ul>
              {reference.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="citation-note">
        <h2>Important Citation Reminder</h2>

        <p>
          Before submitting the project, replace the general
          reference descriptions above with the exact titles,
          authors, publication dates, URLs, books, journal articles,
          images, and videos actually used by your group.
        </p>

        <p>
          Every borrowed image, video, statistic, quotation, or
          important information should be properly acknowledged.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("home")}
      >
        ← Back to Home
      </button>
    </section>
  );
}

export default References;