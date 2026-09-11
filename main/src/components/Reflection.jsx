import { useState } from "react";
import "./Reflection.css";

function Reflection({ setPage }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "Should household responsibilities be based on gender?",
      answer:
        "No. Household responsibilities should not automatically be based on gender. Family members can share cooking, cleaning, childcare, and other responsibilities depending on their time, skills, and agreement. Sharing responsibilities can create a more respectful and equal family environment.",
    },

    {
      question: "How can students help reduce gender stereotypes?",
      answer:
        "Students can help reduce gender stereotypes by treating everyone with respect and avoiding assumptions about what boys or girls can do. They can support classmates in choosing activities, courses, and careers based on their interests and abilities instead of gender expectations.",
    },

    {
      question: "Why is equal opportunity important?",
      answer:
        "Equal opportunity is important because every person should have a fair chance to study, work, lead, and achieve their goals. Gender should not prevent someone from developing their talents. Providing equal opportunities can help individuals contribute more effectively to their families, communities, and society.",
    },

    {
      question: "How have gender roles changed in the Philippines?",
      answer:
        "Gender roles in the Philippines have changed significantly over time. In the past, traditional expectations often emphasized men as providers and women as caregivers. Today, women participate widely in education, employment, politics, and leadership, while more men also participate in childcare and household responsibilities.",
    },

    {
      question: "What gender stereotypes can still be seen in Filipino society?",
      answer:
        "Some gender stereotypes still appear in families, schools, workplaces, and media. For example, people may expect women to be responsible for household work or expect men to always be strong and financially responsible. These expectations can limit people's choices and should be examined critically.",
    },

    {
      question: "How does media influence gender roles?",
      answer:
        "Media can influence how people understand gender by showing certain behaviors, appearances, careers, and responsibilities as normal for men or women. Positive and diverse representation can help challenge stereotypes, while repeated stereotypical portrayals can strengthen traditional expectations.",
    },

    {
      question: "What can families do to promote gender equality?",
      answer:
        "Families can promote gender equality by giving children equal opportunities to study, express themselves, participate in activities, and make decisions. Parents can also teach children that household responsibilities should be shared and that respect should be given to everyone regardless of gender.",
    },

    {
      question: "Why is it important to study gender roles in Philippine history?",
      answer:
        "Studying gender roles in Philippine history helps us understand how culture, colonization, education, religion, and social changes influenced the expectations placed on men and women. It also helps us recognize the progress that has happened and the challenges that still need attention.",
    },
  ];

  const handleQuestionChange = (event) => {
    const index = event.target.value;

    if (index === "") {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(questions[Number(index)]);
    }
  };

  return (
    <section className="page reflection-page">

      {/* HEADER */}
      <div className="reflection-header">

        <span className="reflection-badge">
          MCO 1 • ANALYSIS & REFLECTION
        </span>

        <h1 className="section-title">
          Reflection Corner
        </h1>

        <p className="section-description">
          Choose a question below and read the reflection answer.
          Think about how gender roles influence Filipino families,
          education, work, media, leadership, and everyday life.
        </p>

      </div>


      {/* REFLECTION BOX */}
      <div className="reflection-box">

        <div className="reflection-icon">
          💭
        </div>

        <h2>
          Choose a Reflection Question
        </h2>

        <p className="reflection-intro">
          Select a question to explore our group's perspective
          about gender roles in the Philippine context.
        </p>


        {/* QUESTION SELECT */}
        <select
          onChange={handleQuestionChange}
          defaultValue=""
        >
          <option value="">
            -- Select a question --
          </option>

          {questions.map((item, index) => (
            <option
              value={index}
              key={index}
            >
              {item.question}
            </option>
          ))}

        </select>


        {/* ANSWER */}
        {selectedQuestion && (

          <div className="reflection-answer">

            <div className="question-label">
              REFLECTION QUESTION
            </div>

            <h3>
              {selectedQuestion.question}
            </h3>


            <div className="answer-container">

              <div className="answer-icon">
                💡
              </div>

              <div>
                <span className="answer-label">
                  Our Reflection
                </span>

                <p>
                  {selectedQuestion.answer}
                </p>
              </div>

            </div>


            {/* PERSONAL THINKING */}
            <div className="thinking-box">

              <h4>
                🤔 Think About It
              </h4>

              <p>
                How does this question relate to your own
                family, school, community, or experience as
                a Filipino student?
              </p>

            </div>

          </div>

        )}

      </div>


      {/* CRITICAL ANALYSIS */}
      <div className="critical-reflection">

        <span className="critical-label">
          GROUP INSIGHT
        </span>

        <h2>
          What We Learned
        </h2>

        <p>
          Our group learned that gender roles in the Philippines
          have changed over time. Although traditional expectations
          are still present in some areas, Filipino women and men
          increasingly participate in different roles in families,
          education, employment, leadership, and communities.
        </p>

        <p>
          We believe that gender should not be used as a limitation
          on a person's abilities or opportunities. Understanding
          the history of gender roles allows us to recognize both
          the progress that has been made and the challenges that
          remain in Philippine society.
        </p>

        <p>
          As students, we can contribute to positive change by
          respecting others, avoiding stereotypes, supporting equal
          opportunities, and encouraging people to pursue their
          goals based on their abilities and interests.
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

export default Reflection;