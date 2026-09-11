import "./Home.css";

import member1 from "../assets/members/member1.jpg";
import member2 from "../assets/members/member2.jpg";
import member3 from "../assets/members/member3.jpg";
import member4 from "../assets/members/member4.jpg";
import member5 from "../assets/members/member5.jpg"; 
import member6 from "../assets/members/member6.jpg";
import member7 from "../assets/members/member7.jpg";

function Home({ setPage }) {
  const members = [
    {
      image: member1,
      fullName: "Sarmiento, Juliet Labanancia",
      age: "20",
      address: "Lope de Vega, Northern Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member2,
      fullName: "Saucero, Remalyn Francisco",
      age: "20",
      address: "Brgy. Lapaan Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member3,
      fullName: "Senolos III, Buddy Balandray",
      age: "20",
      address: "Brgy. Dagum, Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member4,
      fullName: "Tarrayo, Elesaldy Jr.",
      age: "20+",
      address: "Brgy. Carayman, Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member5,
      fullName: "Vallejos, Cristine Joy Berba",
      age: "20",
      address: "Brgy. Alibaba, Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member6,
      fullName: "Velasco, Maria Fe. Sintos",
      age: "20+",
      address: "Tinambacan, Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "3rd Year",
      section: "BSIT 3C",
      role: "Group Member",
    },
    {
      image: member7,
      fullName: "Catillo, Mika Ella Manalangit",
      age: "20",
      address: "Calbayog City, Samar",
      course: "Bachelor of Science in Information Technology",
      yearLevel: "2nd Year",
      section: "BSIT 2B",
      role: "Group Member",
    },
  ];

  return (
    <section className="home">

      {/* HERO SECTION */}
      <div className="home-content">

        <div className="badge">
          MCO 1 • Gender and Society
        </div>

        <h1>
          Gender Roles in the
          <span> Philippines</span>
        </h1>

        <p>
          Explore how gender roles have changed throughout Philippine
          history and how they continue to influence Filipino society today.
        </p>

        <div className="home-buttons">

          <button
            className="primary-btn"
            onClick={() => setPage("historical")}
          >
            Explore History
          </button>

          <button
            className="secondary-btn"
            onClick={() => setPage("contemporary")}
          >
            View Modern Roles
          </button>

        </div>

        {/* INTRODUCTION CARDS */}
        <div className="home-cards">

          <div className="mini-card">
            <span>📜</span>

            <h3>Historical</h3>

            <p>
              Discover how gender roles developed throughout
              Philippine history.
            </p>
          </div>

          <div className="mini-card">
            <span>🌏</span>

            <h3>Contemporary</h3>

            <p>
              Understand gender roles and experiences in
              Filipino society today.
            </p>
          </div>

          <div className="mini-card">
            <span>⚖️</span>

            <h3>Equality</h3>

            <p>
              Explore equal opportunities, respect, and
              shared responsibilities.
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          GROUP MEMBERS SECTION
      ========================= */}

      <div className="members-home-section">

        <div className="members-home-heading">

          <span className="members-badge">
            MCO 1 • GROUP MEMBERS
          </span>

          <h2>
            Meet Our Group
          </h2>

          <p>
            Meet the students who contributed to the research,
            design, development, multimedia, and presentation
            of this MCO 1.
          </p>

        </div>


        {/* MEMBERS GRID */}

        <div className="home-members-grid">

          {members.map((member, index) => (

            <div
              className="home-member-card"
              key={index}
              onClick={() => setPage("figures")}
            >

              {/* TOP DESIGN */}

              <div className="member-card-top"></div>


              {/* IMAGE */}

              <div className="home-member-image-wrapper">

                <img
                  src={member.image}
                  alt={member.fullName}
                  className="home-member-image"
                />

                <div className="member-number">
                  {index + 1}
                </div>

              </div>


              {/* MEMBER INFORMATION */}

              <div className="home-member-info">

                <span className="home-member-role">
                  {member.role}
                </span>

                <h3>
                  {member.fullName}
                </h3>

                <p className="home-member-course">
                  🎓 {member.course}
                </p>

                <div className="home-member-basic">

                  <span>
                    📚 {member.yearLevel}
                  </span>

                  <span>
                    🏫 {member.section}
                  </span>

                </div>

                </div>

              </div>

          ))}

        </div>


        {/* VIEW FULL PROFILE BUTTON */}

        <button
          className="view-members-btn"
          onClick={() => setPage("figures")}
        >
          View Individual Contributed Profiles →
        </button>

      </div>


      {/* =========================
          PROJECT INTRODUCTION
      ========================= */}

      <div className="project-intro">

        <span className="members-badge">
          ABOUT THIS PROJECT
        </span>

        <h2>
          Understanding Gender Roles
        </h2>

        <p>
          This website presents a critical exploration of gender
          roles in the Philippine context. It examines historical
          developments, contemporary experiences, gender issues,
          social expectations, and the continuing importance of
          equality and respect.
        </p>

        <div className="project-intro-buttons">

          <button
            className="primary-btn"
            onClick={() => setPage("comparison")}
          >
            Compare Past and Present
          </button>

          <button
            className="secondary-btn"
            onClick={() => setPage("issues")}
          >
            Explore Gender Issues
          </button>

        </div>

      </div>


      {/* =========================
          CONCLUSION MESSAGE
      ========================= */}

      <div className="home-message">

        <div className="home-message-icon">
          💙💗
        </div>

        <h2>
          Equality Starts With Understanding
        </h2>

        <p>
          Gender roles can change as society develops. Understanding
          history and present-day experiences can help us challenge
          stereotypes, respect differences, and promote equal
          opportunities for everyone.
        </p>

        <button
          className="primary-btn"
          onClick={() => setPage("reflection")}
        >
          Go to Reflection Corner →
        </button>

      </div>

    </section>
  );
}

export default Home;