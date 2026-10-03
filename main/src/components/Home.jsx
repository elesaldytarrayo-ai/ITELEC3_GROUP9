import { useState } from "react";
import "./Home.css";

import member1 from "../assets/members/member1.jpg";
import member2 from "../assets/members/member2.jpg";
import member3 from "../assets/members/member3.jpg";
import member4 from "../assets/members/member4.jpg";
import member5 from "../assets/members/member5.jpg";
import member6 from "../assets/members/member6.jpg";
import member7 from "../assets/members/member7.jpg";

function Home({ setPage }) {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  const members = [
    { image: member1, fullName: "Sarmiento, Juliet Labanancia", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member2, fullName: "Saucero, Remalyn Francisco", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member3, fullName: "Senolos III, Buddy Balandray", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member4, fullName: "Tarrayo, Elesaldy Jr.", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member5, fullName: "Vallejos, Cristine Joy Berba", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member6, fullName: "Velasco, Maria Fe. Sintos", course: "Bachelor of Science in Information Technology", yearLevel: "3rd Year", section: "BSIT 3C", role: "Group Member" },
    { image: member7, fullName: "Catillo, Mika Ela Manlangit", course: "Bachelor of Science in Information Technology", yearLevel: "2nd Year", section: "BSIT 2B", role: "Group Member" },
  ];

  const topics = [
    { icon: "📜", title: "Historical Perspective", summary: "How gender roles evolved across Philippine history.", details: "From pre-colonial communities where women held important roles in trade and leadership, through the Spanish colonial period that emphasized domestic expectations, to American-era education reforms, and finally the post-war and modern eras — this section walks through five historical periods that shaped Filipino gender roles.", page: "historical" },
    { icon: "🌏", title: "Contemporary Roles", summary: "How Filipino women and men live and work today.", details: "Filipino women now participate in careers, government, education, technology, and healthcare, while many men actively share childcare and household responsibilities. Education, digital technology, media, and community life continue to reshape what it means to be a woman or a man in the Philippines.", page: "contemporary" },
    { icon: "⚖️", title: "Gender Issues", summary: "Stereotypes, discrimination, and inequality today.", details: "Gender stereotypes, workplace discrimination, unequal pay, limited representation, and unbalanced household responsibilities still affect many Filipinos. Understanding these issues helps us recognize where change is needed and how to promote fairness and respect for everyone.", page: "issues" },
    { icon: "📊", title: "Past vs. Present", summary: "A critical comparison across time.", details: "By comparing historical and contemporary perspectives on family, work, education, leadership, and media, we can see how much has changed — and how much still needs to change. Progress does not mean inequality has disappeared; it means the conversation continues.", page: "comparison" },
    { icon: "🎥", title: "Multimedia", summary: "Videos and images that bring the topic to life.", details: "Watch a video presentation and browse illustrations showing women in pre-colonial Philippines, Filipino women in modern society, and the ongoing pursuit of gender equality. Visual material helps us connect statistics and ideas to real experiences.", page: "multimedia" },
    { icon: "💙", title: "Our Conclusion", summary: "The group's overall insight on gender roles.", details: "Gender roles in the Philippines have never been completely fixed. History, culture, education, and social movements continue to reshape expectations. Our group believes that understanding both the past and the present helps build a more inclusive and respectful society for everyone.", page: "conclusion" },
  ];

  return (
    <section className="home">

      <div className="hero-section">
        <div className="home-content">
          <div className="badge">
            <span className="badge-dot"></span>
            MCO 1 • Gender and Society
          </div>

          <h1>
            Gender Roles in the
            <span> Philippines</span>
          </h1>

          <p className="hero-subtitle">
            Explore how gender roles have evolved throughout Philippine
            history — and how they continue to shape Filipino families,
            schools, workplaces, and communities today.
          </p>

          <div className="home-buttons">
            <button className="primary-btn" onClick={() => setPage("historical")}>
              📜 Explore History
            </button>
            <button className="secondary-btn" onClick={() => setPage("contemporary")}>
              🌏 View Modern Roles
            </button>
            <button className="secondary-btn" onClick={() => setPage("statistics")}>
              📊 Filipino Statistics
            </button>
          </div>
        </div>
      </div>

      <div className="topics-section">
        <div className="topics-heading">
          <span className="section-tag">EXPLORE THE TOPIC</span>
          <h2>What You Will Discover</h2>
          <p>Tap any topic below to reveal its full content.</p>
        </div>

        <div className="topics-list">
          {topics.map((topic, index) => {
            const isOpen = openTopic === index;
            return (
              <div className={`topic-card ${isOpen ? "open" : ""}`} key={index}>
                <button className="topic-header" onClick={() => toggleTopic(index)}>
                  <div className="topic-icon">{topic.icon}</div>
                  <div className="topic-title-wrap">
                    <h3>{topic.title}</h3>
                    <p className="topic-summary">{topic.summary}</p>
                  </div>
                  <span className="topic-toggle">{isOpen ? "−" : "+"}</span>
                </button>

                <div className="topic-body">
                  <div className="topic-body-inner">
                    <p>{topic.details}</p>
                    <button
                      className="topic-explore-btn"
                      onClick={() => setPage(topic.page)}
                    >
                      Explore this section →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="members-home-section">
        <div className="members-home-heading">
          <span className="members-badge">MCO 1 • GROUP MEMBERS</span>
          <h2>Meet Our Group</h2>
          <p>
            Meet the students who contributed to the research,
            design, development, multimedia, and presentation
            of this MCO 1 project.
          </p>
        </div>

        <div className="home-members-grid">
          {members.map((member, index) => (
            <div className="home-member-card" key={index}>
              <div className="home-member-image-wrapper">
                <img src={member.image} alt={member.fullName} className="home-member-image" />
                <div className="member-number">{index + 1}</div>
              </div>
              <div className="home-member-info">
                <span className="home-member-role">{member.role}</span>
                <h3>{member.fullName}</h3>
                <p className="home-member-course">🎓 {member.course}</p>
                <div className="home-member-basic">
                  <span>📚 {member.yearLevel}</span>
                  <span>🏫 {member.section}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-members-btn" onClick={() => setPage("figures")}>
          View Key Figures →
        </button>
      </div>

      <div className="project-intro">
        <span className="members-badge">ABOUT THIS PROJECT</span>
        <h2>Understanding Gender Roles</h2>
        <p>
          This website presents a critical exploration of gender
          roles in the Philippine context. It examines historical
          developments, contemporary experiences, gender issues,
          social expectations, and the continuing importance of
          equality and respect.
        </p>
        <div className="project-intro-buttons">
          <button className="primary-btn" onClick={() => setPage("understanding")}>
            📚 Understanding Gender Roles
          </button>
          <button className="secondary-btn" onClick={() => setPage("comparison")}>
            Compare Past and Present
          </button>
          <button className="secondary-btn" onClick={() => setPage("issues")}>
            Explore Gender Issues
          </button>
        </div>
      </div>

      <div className="home-message">
        <div className="home-message-icon">💙💗</div>
        <h2>Equality Starts With Understanding</h2>
        <p>
          Gender roles can change as society develops. Understanding
          history and present-day experiences can help us challenge
          stereotypes, respect differences, and promote equal
          opportunities for everyone.
        </p>
        <button className="primary-btn" onClick={() => setPage("reflection")}>
          Go to Reflection Corner →
        </button>
      </div>

    </section>
  );
}

export default Home;