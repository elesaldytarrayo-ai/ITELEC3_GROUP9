import "./KeyFigures.css";

import gabrielaSilang from "../assets/figures/gabriela-silang.jpg";
import corazonAquino from "../assets/figures/corazon-aquino.jpg";
import joseRizal from "../assets/figures/jose-rizal.jpg";
import gregoriaDeJesus from "../assets/figures/gregoria-de-jesus.jpg";

function KeyFigures({ setPage }) {
  const figures = [
    {
      image: gabrielaSilang,
      name: "Gabriela Silang",
      period: "Spanish Colonial Period",
      role: "Revolutionary Leader",
      birth: "March 19, 1731",
      contribution:
        "Gabriela Silang became a leader of the Ilocos resistance after the death of her husband, Diego Silang. She continued the struggle against Spanish colonial rule and became an important symbol of women's participation in leadership and resistance.",
      importance:
        "Her story challenges the idea that leadership and resistance were only for men. Gabriela Silang represents the ability of Filipino women to lead, make decisions, and participate in important historical events.",
    },

    {
      image: corazonAquino,
      name: "Corazon Aquino",
      period: "Contemporary Philippine History",
      role: "President of the Philippines",
      birth: "January 25, 1933",
      contribution:
        "Corazon Aquino became the first woman President of the Philippines in 1986. Her presidency followed the People Power Revolution and became an important moment in Philippine political history.",
      importance:
        "Her leadership demonstrated that Filipino women could hold the highest political office in the country and participate directly in national decision-making.",
    },

    {
      image: joseRizal,
      name: "Jose Rizal",
      period: "Spanish Colonial Period",
      role: "National Hero and Reformist",
      birth: "June 19, 1861",
      contribution:
        "Jose Rizal used his writings to criticize social problems during the Spanish colonial period. In his works, he also recognized the importance of education and the role of women in society.",
      importance:
        "Rizal's writings provide an important historical perspective on education, social expectations, and the position of women during the colonial period.",
    },

    {
      image: gregoriaDeJesus,
      name: "Gregoria de Jesus",
      period: "Philippine Revolution",
      role: "Revolutionary and Katipunan Member",
      birth: "May 9, 1875",
      contribution:
        "Gregoria de Jesus was an important member of the Katipunan and was known for helping preserve documents and supporting the revolutionary movement. She was also associated with Andres Bonifacio.",
      importance:
        "Her life demonstrates that women participated in the Philippine Revolution through organizational work, courage, support, and other important responsibilities.",
    },
  ];

  return (
    <section className="page keyfigures-page">

      {/* HEADER */}
      <div className="figures-header">

        <span className="figures-badge">
          MCO 1 • HISTORICAL FIGURES
        </span>

        <h1 className="section-title">
          Filipino Key Figures
        </h1>

        <p className="section-description">
          Throughout Philippine history, Filipino women and men have
          contributed to leadership, education, social change, and
          national development. These figures help us understand how
          gender roles have developed and changed over time.
        </p>

      </div>


      {/* FIGURE CARDS */}
      <div className="figures-grid">

        {figures.map((figure, index) => (

          <article
            className="figure-profile"
            key={index}
          >

            {/* IMAGE */}
            <div className="figure-image-container">

              <img
                src={figure.image}
                alt={figure.name}
                className="figure-image"
              />

              <div className="figure-number">
                {index + 1}
              </div>

            </div>


            {/* INFORMATION */}
            <div className="figure-information">

              <span className="figure-period">
                {figure.period}
              </span>

              <h2>
                {figure.name}
              </h2>

              <h3>
                {figure.role}
              </h3>


              <div className="figure-basic-info">

                <div>
                  <span>📅 Birth</span>
                  <strong>{figure.birth}</strong>
                </div>

                <div>
                  <span>🇵🇭 Context</span>
                  <strong>{figure.period}</strong>
                </div>

              </div>


              {/* CONTRIBUTION */}
              <div className="figure-section">

                <h4>
                  📖 Contribution
                </h4>

                <p>
                  {figure.contribution}
                </p>

              </div>


              {/* IMPORTANCE */}
              <div className="figure-section importance-section">

                <h4>
                  💡 Importance to Gender Roles
                </h4>

                <p>
                  {figure.importance}
                </p>

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* ANALYSIS BOX */}
      <div className="figures-analysis">

        <span className="analysis-label">
          CRITICAL ANALYSIS
        </span>

        <h2>
          Women and Men in Philippine History
        </h2>

        <p>
          The stories of these individuals show that gender roles
          have never been completely fixed. Filipino women have
          participated in leadership, revolution, politics, and
          community life, while Filipino men have also contributed
          to education, reform, and social change.
        </p>

        <p>
          Studying these historical figures helps us recognize how
          culture, colonialism, education, and social expectations
          influenced gender roles in the Philippines. Their
          experiences also show how individuals can challenge
          traditional expectations and contribute to society.
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

export default KeyFigures;