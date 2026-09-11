import { useState } from "react";
import "./Reflection.css";

function Reflection({ setPage }) {
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    "Should household responsibilities be based on gender?",
    "How can students help reduce gender stereotypes?",
    "Why is equal opportunity important?",
    "How have gender roles changed in the Philippines?"
  ];

  return (
    <section className="page reflection-page">
      <h1 className="section-title">
        Reflection Corner
      </h1>

      <p className="section-description">
        Think about what you have learned and connect the topic to
        everyday Filipino life.
      </p>

      <div className="reflection-box">
        <div className="reflection-icon">💭</div>

        <h2>Choose a Question</h2>

        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setShowAnswer(false);
          }}
        >
          <option value="">-- Select a question --</option>

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
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "Hide Guide" : "Show Reflection Guide"}
            </button>

            {showAnswer && (
              <div className="reflection-guide">
                <strong>Think about:</strong>

                <p>
                  Your personal experience, Filipino culture, family
                  expectations, education, and how society can promote
                  respect and equal opportunities.
                </p>
              </div>
            )}
          </div>
        )}
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

export default Reflection;