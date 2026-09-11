import "./Contemporary.css";

function Contemporary({ setPage }) {
  const roles = [
    {
      icon: "👩‍💼",
      title: "Women in Careers",
      text: "Filipino women participate in professions, businesses, government, education, technology, healthcare, and many other fields."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Men in Family Care",
      text: "Many men actively participate in childcare, household responsibilities, and emotional and financial support for their families."
    },
    {
      icon: "🎓",
      title: "Education",
      text: "Education provides opportunities for people of different genders to develop skills and pursue academic and professional goals."
    },
    {
      icon: "💻",
      title: "Technology and Media",
      text: "Digital technology and social media allow people to express themselves while also creating spaces for discussions about gender equality."
    },
    {
      icon: "🏛️",
      title: "Leadership",
      text: "Women and men participate in leadership in government, schools, organizations, businesses, and communities."
    },
    {
      icon: "🏠",
      title: "Family Responsibilities",
      text: "Some Filipino families increasingly divide household duties according to ability, agreement, work schedules, and family needs."
    },
    {
      icon: "📺",
      title: "Media Representation",
      text: "Media can influence how people understand masculinity, femininity, family roles, careers, and appearance."
    },
    {
      icon: "🤝",
      title: "Community",
      text: "People of different genders contribute to community development, volunteer activities, education, and social programs."
    }
  ];

  return (
    <section className="page">
      <h1 className="section-title">
        Contemporary Gender Roles
      </h1>

      <p className="section-description">
        Gender roles in the Philippines are changing as people gain
        greater access to education, employment, technology, leadership,
        and opportunities for social participation.
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
          Contemporary Filipino society shows progress toward more
          flexible gender roles, but traditional expectations and
          inequalities can still influence people's experiences.
        </p>
      </div>

      <button
        className="primary-btn back-btn"
        onClick={() => setPage("issues")}
      >
        Explore Gender Issues →
      </button>
    </section>
  );
}

export default Contemporary;