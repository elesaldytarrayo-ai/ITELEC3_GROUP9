import "./Contemporary.css";

function Contemporary({ setPage }) {
  const roles = [
    {
      icon: "👩‍💼",
      title: "Women in Careers",
      text: "Filipino women participate in many professions, businesses, government positions, technology, education, and other fields."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Men in Family Care",
      text: "More men are actively involved in childcare, household responsibilities, and supporting their families."
    },
    {
      icon: "🎓",
      title: "Education",
      text: "Education provides opportunities for people regardless of gender to develop skills and pursue their goals."
    },
    {
      icon: "💻",
      title: "Technology",
      text: "Technology and social media have created new opportunities for people to express themselves and challenge stereotypes."
    },
    {
      icon: "🏛️",
      title: "Leadership",
      text: "Filipino women and men can participate in leadership and decision-making in communities and organizations."
    },
    {
      icon: "🤝",
      title: "Shared Responsibilities",
      text: "Modern families increasingly share responsibilities based on ability, agreement, and circumstances rather than gender alone."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Contemporary Gender Roles
      </h1>

      <p className="section-description">
        Today, Filipino society is gradually moving toward greater
        flexibility in gender roles. People have more opportunities to
        choose careers, responsibilities, and lifestyles.
      </p>

      <div className="card-grid">
        {roles.map((role, index) => (
          <div className="info-card modern-card" key={index}>
            <div className="icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.text}</p>
          </div>
        ))}
      </div>

      <div className="message-box">
        <h2>💙💗 A Changing Society</h2>
        <p>
          Gender roles are not always fixed. They can change as society
          develops. Respect, equal opportunities, and shared responsibility
          can help create a more inclusive community.
        </p>
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

export default Contemporary;