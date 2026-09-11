import { useState } from "react";
import "./Reflection.css";

function Reflection({ setPage }) {
  const [selected, setSelected] = useState("");
  const [showGuide, setShowGuide] = useState(false);
  const [score, setScore] = useState(null);

  const questions = [
    "Should household responsibilities be based only on gender?",
    "How can students help reduce gender stereotypes?",
    "Why is equal opportunity important?",
    "How have gender roles changed in the Philippines?",
    "What gender issue do you think Philippine society should address?"
  ];

  const quiz = [
    {
      question: "What can influence gender roles?",
      options: [
        "Culture and society",
        "Only biology",
        "Only age",
        "Nothing"
      ],
      answer: "Culture and society"
    },
    {
      question: "Which is an example of gender stereotyping?",
      options: [
        "Everyone can choose a career",
        "Only women should do household work",
        "Students can study",
        "People can participate in communities"
      ],
      answer: "Only women should do household work"
    },
    {
      question: "What promotes gender equality?",
      options: [
        "Discrimination",
        "Stereotypes",
        "Equal opportunities",
        "Exclusion"
      ],
      answer: "Equal opportunities"
    }
  ];

  const [answers, setAnswers] = useState({});

  const submitQuiz = () => {
    let result = 0;

    quiz.forEach((item, index) => {
      if (answers[index] === item.answer) {
        result++;
      }
    });

    setScore(result);
  };

  return (
    <section className="page reflection-page">
      <h1 className="section-title">
        Analysis and Reflection
      </h1>

      <p className="section-description">
        Think about what you have learned and connect the topic
        to everyday Filipino life.
      </p>

      <div className="reflection-box">
        <div className="reflection-icon">💭</div>

        <h2>Reflection Corner</h2>

        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setShowGuide(false);
          }}
        >
          <option value="">
            -- Select a reflection question --
          </option>

          {questions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>

        {selected && (
          <div className="selected-question">
            <h3>Question:</h3>

            <p>{selected}</p>

            <button
              className="primary-btn"
              onClick={() => setShowGuide(!showGuide)}
            >
              {showGuide ? "Hide Guide" : "Show Reflection Guide"}
            </button>

            {showGuide && (
              <div className="reflection-guide">
                <strong>Think about:</strong>

                <p>
                  Your personal experience, Filipino culture,
                  family expectations, education, media,
                  workplace experiences, and how society can
                  promote respect and equal opportunities.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="quiz-box">
        <h2>Quick Knowledge Check</h2>

        <p>
          Test your understanding of gender roles.
        </p>

        {quiz.map((item, index) => (
          <div className="quiz-question" key={index}>
            <h3>
              {index + 1}. {item.question}
            </h3>

            {item.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      [index]: e.target.value
                    })
                  }
                />

                {option}
              </label>
            ))}
          </div>
        ))}

        <button
          className="primary-btn"
          onClick={submitQuiz}
        >
          Submit Quiz
        </button>

        {score !== null && (
          <div className="score">
            Your Score: {score} / {quiz.length}
          </div>
        )}
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("conclusion")}
      >
        Continue to Conclusion →
      </button>
    </section>
  );
}

export default Reflection;