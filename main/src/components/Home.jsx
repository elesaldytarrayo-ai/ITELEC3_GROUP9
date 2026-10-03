import { useState } from "react";

import "./Home.css";
import "./Understanding.css";
import "./Historical.css";
import "./KeyFigures.css";
import "./Contemporary.css";
import "./Statistics.css";
import "./Issues.css";
import "./Comparison.css";
import "./Reflection.css";
import "./Multimedia.css";
import "./Conclusion.css";
import "./References.css";

import member1 from "../assets/members/member1.jpg";
import member2 from "../assets/members/member2.jpg";
import member3 from "../assets/members/member3.jpg";
import member4 from "../assets/members/member4.jpg";
import member5 from "../assets/members/member5.jpg";
import member6 from "../assets/members/member6.jpg";
import member7 from "../assets/members/member7.jpg";

import gabrielaSilang from "../assets/figures/gabriela-silang.jpg";
import corazonAquino from "../assets/figures/corazon-aquino.jpg";
import joseRizal from "../assets/figures/jose-rizal.jpg";
import gregoriaDeJesus from "../assets/figures/gregoria-de-jesus.jpg";

import precolonialWomen from "../assets/images/precolonial-women.jpg";
import filipinoWomen from "../assets/images/filipino-women.jpg";
import genderEquality from "../assets/images/gender-equality.jpg";

import genderRolesVideo from "../assets/videos/gender-roles.mp4";

function Home() {
  const [openTopic, setOpenTopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleTopic = (i) => setOpenTopic(openTopic === i ? null : i);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    { icon: "📜", title: "Historical Perspective", summary: "How gender roles evolved across Philippine history.", details: "From pre-colonial communities where women held important roles in trade and leadership, through the Spanish colonial period, to American-era education reforms, and the modern era — five historical periods that shaped Filipino gender roles.", target: "history" },
    { icon: "🌏", title: "Contemporary Roles", summary: "How Filipino women and men live and work today.", details: "Filipino women now participate in careers, government, education, technology, and healthcare, while many men actively share childcare and household responsibilities. Digital technology, media, and community life continue to reshape gender in the Philippines.", target: "today" },
    { icon: "⚖️", title: "Gender Issues", summary: "Stereotypes, discrimination, and inequality today.", details: "Gender stereotypes, workplace discrimination, unequal pay, limited representation, and unbalanced household responsibilities still affect many Filipinos. Understanding these issues helps us recognize where change is needed.", target: "issues" },
    { icon: "📊", title: "Past vs. Present", summary: "A critical comparison across time.", details: "By comparing historical and contemporary perspectives on family, work, education, leadership, and media, we can see how much has changed — and how much still needs to change.", target: "analysis" },
    { icon: "🎥", title: "Multimedia", summary: "Videos and images that bring the topic to life.", details: "Watch a video presentation and browse illustrations showing women in pre-colonial Philippines, Filipino women in modern society, and the ongoing pursuit of gender equality.", target: "multimedia" },
    { icon: "💙", title: "Our Conclusion", summary: "The group's overall insight on gender roles.", details: "Gender roles in the Philippines have never been completely fixed. History, culture, education, and social movements continue to reshape expectations.", target: "conclusion" },
  ];

  const concepts = [
    { icon: "👥", title: "What Are Gender Roles?", text: "Gender roles are social expectations about how people are expected to behave, work, communicate, and participate in family and society based on gender." },
    { icon: "🧬", title: "Biological Sex", text: "Biological sex refers to physical and biological characteristics such as reproductive anatomy, chromosomes, and hormones." },
    { icon: "🌱", title: "Gender", text: "Gender refers to socially and culturally influenced identities, expectations, behaviors, and roles associated with people." },
    { icon: "🏘️", title: "Why Study Gender Roles?", text: "Studying gender roles helps society understand stereotypes, recognize inequality, and promote fair opportunities and respectful relationships." },
  ];

  const periods = [
    { year: "Before 1565", period: "Pre-Colonial Philippines", icon: "🌿", title: "Diverse and Important Roles", text: "Many communities had important roles for women and men in agriculture, trade, family life, leadership, and spiritual practices. Some women could become traders, community leaders, or spiritual figures." },
    { year: "1565–1898", period: "Spanish Colonial Period", icon: "⛪", title: "Stronger Traditional Expectations", text: "Spanish colonial culture and religious influence contributed to stronger expectations that women should focus on family and domestic responsibilities, while men were commonly associated with authority and providing for the household." },
    { year: "1898–1946", period: "American Period", icon: "📚", title: "Education and New Opportunities", text: "The expansion of formal education created additional opportunities for Filipino women and men. More women entered schools and eventually participated in professional and public life." },
    { year: "1946–1986", period: "Post-War Philippines", icon: "🏠", title: "Family, Work, and Public Life", text: "Family expectations remained important, while women increasingly participated in employment, education, politics, and other areas of public life." },
    { year: "1986–Present", period: "Contemporary Philippines", icon: "🌏", title: "Changing Gender Expectations", text: "Women and men increasingly participate in different careers, leadership roles, education, family responsibilities, and community activities. However, gender stereotypes and inequalities continue to exist." },
  ];

  const figures = [
    { image: gabrielaSilang, name: "Gabriela Silang", period: "Spanish Colonial Period", role: "Revolutionary Leader", birth: "March 19, 1731", contribution: "Gabriela Silang became a leader of the Ilocos resistance after the death of her husband, Diego Silang. She continued the struggle against Spanish colonial rule and became an important symbol of women's participation in leadership and resistance.", importance: "Her story challenges the idea that leadership and resistance were only for men. Gabriela Silang represents the ability of Filipino women to lead, make decisions, and participate in important historical events." },
    { image: corazonAquino, name: "Corazon Aquino", period: "Contemporary Philippine History", role: "President of the Philippines", birth: "January 25, 1933", contribution: "Corazon Aquino became the first woman President of the Philippines in 1986. Her presidency followed the People Power Revolution and became an important moment in Philippine political history.", importance: "Her leadership demonstrated that Filipino women could hold the highest political office in the country and participate directly in national decision-making." },
    { image: joseRizal, name: "Jose Rizal", period: "Spanish Colonial Period", role: "National Hero and Reformist", birth: "June 19, 1861", contribution: "Jose Rizal used his writings to criticize social problems during the Spanish colonial period. In his works, he also recognized the importance of education and the role of women in society.", importance: "Rizal's writings provide an important historical perspective on education, social expectations, and the position of women during the colonial period." },
    { image: gregoriaDeJesus, name: "Gregoria de Jesus", period: "Philippine Revolution", role: "Revolutionary and Katipunan Member", birth: "May 9, 1875", contribution: "Gregoria de Jesus was an important member of the Katipunan and was known for helping preserve documents and supporting the revolutionary movement. She was also associated with Andres Bonifacio.", importance: "Her life demonstrates that women participated in the Philippine Revolution through organizational work, courage, support, and other important responsibilities." },
  ];

  const roles = [
    { icon: "👩‍💼", title: "Women in Careers", text: "Filipino women participate in professions, businesses, government, education, technology, healthcare, and many other fields." },
    { icon: "👨‍👩‍👧", title: "Men in Family Care", text: "Many men actively participate in childcare, household responsibilities, and emotional and financial support for their families." },
    { icon: "🎓", title: "Education", text: "Education provides opportunities for people of different genders to develop skills and pursue academic and professional goals." },
    { icon: "💻", title: "Technology and Media", text: "Digital technology and social media allow people to express themselves while also creating spaces for discussions about gender equality." },
    { icon: "🏛️", title: "Leadership", text: "Women and men participate in leadership in government, schools, organizations, businesses, and communities." },
    { icon: "🏠", title: "Family Responsibilities", text: "Some Filipino families increasingly divide household duties according to ability, agreement, work schedules, and family needs." },
    { icon: "📺", title: "Media Representation", text: "Media can influence how people understand masculinity, femininity, family roles, careers, and appearance." },
    { icon: "🤝", title: "Community", text: "People of different genders contribute to community development, volunteer activities, education, and social programs." },
  ];

  const statistics = [
    { icon: "👩‍💼", value: "49%", label: "Women in the Labor Force", description: "Approximate share of Filipino women participating in the labor force." },
    { icon: "🏛️", value: "27%", label: "Women in Congress", description: "Approximate share of seats held by women in the Philippine Congress." },
    { icon: "🎓", value: "≈ 50%", label: "Education Access", description: "Girls and boys have roughly equal access to basic and higher education." },
    { icon: "💼", value: "40%", label: "Women in Management", description: "Approximate share of managerial positions held by women." },
    { icon: "🏠", value: "3×", label: "Unpaid Household Work", description: "Women often spend significantly more time on unpaid household and care work than men." },
    { icon: "⚖️", value: "0.79", label: "Gender Equality Index", description: "Approximate score in global gender equality measurements." },
  ];

  const issues = [
    { icon: "🎯", title: "Gender Stereotypes", text: "People may experience expectations about what men and women should do based only on gender." },
    { icon: "🚫", title: "Gender Discrimination", text: "Discrimination can occur when people receive unfair treatment because of their gender." },
    { icon: "💼", title: "Workplace Equality", text: "Fair treatment, equal opportunities, safe workplaces, and respect are important for workers." },
    { icon: "🏫", title: "Equal Education", text: "Everyone should have opportunities to study, develop skills, and achieve educational goals." },
    { icon: "📺", title: "Media Representation", text: "Media portrayals can reinforce stereotypes or help challenge traditional ideas about gender." },
    { icon: "⚖️", title: "Gender Inequality", text: "Unequal access to resources, opportunities, decision-making, and social participation can affect individuals and communities." },
  ];

  const comparisons = [
    { topic: "Family", past: "Traditional expectations often assigned women more household and caregiving responsibilities.", present: "Some families increasingly share household and caregiving responsibilities." },
    { topic: "Work", past: "Certain occupations were strongly associated with particular genders.", present: "Women and men participate in many different professions." },
    { topic: "Education", past: "Educational opportunities were more limited for many people, especially women in earlier periods.", present: "Women and men have broad access to formal education, although inequalities can still exist." },
    { topic: "Leadership", past: "Leadership was often influenced by traditional social expectations.", present: "Women and men participate in leadership positions in different sectors." },
    { topic: "Media", past: "Traditional portrayals often emphasized conventional masculine and feminine roles.", present: "Media includes more diverse representations, although stereotypes remain." },
  ];

  const mediaImages = [
    { image: precolonialWomen, title: "Women in Pre-Colonial Philippines", description: "An illustration representing the roles and participation of women in pre-colonial Philippine communities." },
    { image: filipinoWomen, title: "Filipino Women in Society", description: "Women have contributed to Philippine families, education, work, leadership, and community life." },
    { image: genderEquality, title: "Gender Equality", description: "Gender equality promotes respect, fairness, and equal opportunities for everyone." },
  ];

  const questions = [
    { question: "Should household responsibilities be based on gender?", answer: "No. Household responsibilities should not automatically be based on gender. Family members can share cooking, cleaning, childcare, and other responsibilities depending on their time, skills, and agreement." },
    { question: "How can students help reduce gender stereotypes?", answer: "Students can help reduce gender stereotypes by treating everyone with respect and avoiding assumptions about what boys or girls can do. They can support classmates in choosing activities, courses, and careers based on their interests and abilities." },
    { question: "Why is equal opportunity important?", answer: "Equal opportunity is important because every person should have a fair chance to study, work, lead, and achieve their goals. Gender should not prevent someone from developing their talents." },
    { question: "How have gender roles changed in the Philippines?", answer: "Gender roles in the Philippines have changed significantly over time. In the past, traditional expectations often emphasized men as providers and women as caregivers. Today, women participate widely in education, employment, politics, and leadership." },
    { question: "What gender stereotypes can still be seen in Filipino society?", answer: "Some gender stereotypes still appear in families, schools, workplaces, and media. For example, people may expect women to be responsible for household work or expect men to always be strong and financially responsible." },
    { question: "How does media influence gender roles?", answer: "Media can influence how people understand gender by showing certain behaviors, appearances, careers, and responsibilities as normal for men or women. Positive and diverse representation can help challenge stereotypes." },
    { question: "What can families do to promote gender equality?", answer: "Families can promote gender equality by giving children equal opportunities to study, express themselves, participate in activities, and make decisions. Household responsibilities should be shared." },
    { question: "Why is it important to study gender roles in Philippine history?", answer: "Studying gender roles in Philippine history helps us understand how culture, colonization, education, religion, and social changes influenced the expectations placed on men and women." },
  ];

  const references = [
    { category: "Government Sources", items: ["https://pcw.gov.ph/gender-and-statistics/", "https://psa.gov.ph/", "https://www.officialgazette.gov.ph/"] },
    { category: "Historical and Academic Sources", items: ["https://tuklas.up.edu.ph/Record/UP-99796217604198412?", "https://press.up.edu.ph/product/working-women-of-manila-in-the-nineteenth-century-revised-edition/?", "https://www.jstor.org/action/doBasicSearch?Query=gender%20roles%20philippines"] },
    { category: "Multimedia Sources", items: ["https://www.youtube.com/watch?v=Ulh0DnFUGsk"] },
  ];

  const handleQuestionChange = (e) => {
    const idx = e.target.value;
    setSelectedQuestion(idx === "" ? null : questions[Number(idx)]);
  };

  return (
    <>
      {/* ==================== HOME ==================== */}
      <section id="home" data-section="home" className="section section-home">

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
              <button className="primary-btn" onClick={() => scrollToId("history")}>📜 Explore History</button>
              <button className="secondary-btn" onClick={() => scrollToId("today")}>🌏 View Modern Roles</button>
              <button className="secondary-btn" onClick={() => scrollToId("today")}>📊 Filipino Statistics</button>
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
            {topics.map((topic, i) => {
              const isOpen = openTopic === i;
              return (
                <div className={`topic-card ${isOpen ? "open" : ""}`} key={i}>
                  <button className="topic-header" onClick={() => toggleTopic(i)}>
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
                      <button className="topic-explore-btn" onClick={() => scrollToId(topic.target)}>
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
            <p>Meet the students who contributed to the research, design, development, multimedia, and presentation of this MCO 1 project.</p>
          </div>
          <div className="home-members-grid">
            {members.map((m, i) => (
              <div className="home-member-card" key={i}>
                <div className="home-member-image-wrapper">
                  <img src={m.image} alt={m.fullName} className="home-member-image" />
                  <div className="member-number">{i + 1}</div>
                </div>
                <div className="home-member-info">
                  <span className="home-member-role">{m.role}</span>
                  <h3>{m.fullName}</h3>
                  <p className="home-member-course">🎓 {m.course}</p>
                  <div className="home-member-basic">
                    <span>📚 {m.yearLevel}</span>
                    <span>🏫 {m.section}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <button className="primary-btn" onClick={() => scrollToId("history")}>📚 Understanding Gender Roles</button>
            <button className="secondary-btn" onClick={() => scrollToId("analysis")}>Compare Past and Present</button>
            <button className="secondary-btn" onClick={() => scrollToId("issues")}>Explore Gender Issues</button>
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
          <button className="primary-btn" onClick={() => scrollToId("analysis")}>
            Go to Reflection Corner →
          </button>
        </div>

      </section>

      {/* ==================== HISTORY ==================== */}
      <section id="history" data-section="history" className="section">

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">01</span>
            <span className="eyebrow-label">UNDERSTANDING</span>
          </div>
          <h2 className="section-title">Understanding Gender Roles</h2>
          <p className="section-description">
            Gender roles are influenced by culture, family, history,
            education, religion, media, economics, and other social
            factors. They can change as society changes.
          </p>
          <div className="card-grid">
            {concepts.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="important-box">
            <h2>Why Is This Important?</h2>
            <p>
              Understanding gender roles allows us to question unfair
              expectations and recognize that abilities and responsibilities
              should not be limited by stereotypes.
            </p>
            <ul>
              <li>Promotes respect among people.</li>
              <li>Helps identify discrimination.</li>
              <li>Encourages equal opportunities.</li>
              <li>Supports shared family and community responsibilities.</li>
              <li>Helps people make informed choices about their lives.</li>
            </ul>
          </div>
        </div>

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">02</span>
            <span className="eyebrow-label">HISTORICAL PERSPECTIVE</span>
          </div>
          <h2 className="section-title">Historical Perspective</h2>
          <p className="section-description">
            Philippine gender roles have developed through changes in
            culture, colonization, education, economy, politics, and
            social movements.
          </p>
          <div className="timeline">
            {periods.map((p, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-icon">{p.icon}</div>
                <div className="timeline-content">
                  <span>{p.year}</span>
                  <small>{p.period}</small>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="historical-note">
            <h2>Historical Insight</h2>
            <p>
              Gender roles were never completely the same in every
              Filipino community. Historical experiences differed by
              region, social class, culture, and period.
            </p>
          </div>
        </div>

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">03</span>
            <span className="eyebrow-label">KEY FIGURES</span>
          </div>
          <h2 className="section-title">Filipino Key Figures</h2>
          <p className="section-description">
            Throughout Philippine history, Filipino women and men have
            contributed to leadership, education, social change, and
            national development.
          </p>
          <div className="figures-grid">
            {figures.map((f, i) => (
              <article className="figure-profile" key={i}>
                <div className="figure-image-container">
                  <img src={f.image} alt={f.name} className="figure-image" />
                  <div className="figure-number">{i + 1}</div>
                </div>
                <div className="figure-information">
                  <span className="figure-period">{f.period}</span>
                  <h2>{f.name}</h2>
                  <h3>{f.role}</h3>
                  <div className="figure-basic-info">
                    <div><span>📅 Birth</span><strong>{f.birth}</strong></div>
                    <div><span>🇵🇭 Context</span><strong>{f.period}</strong></div>
                  </div>
                  <div className="figure-section">
                    <h4>📖 Contribution</h4>
                    <p>{f.contribution}</p>
                  </div>
                  <div className="figure-section importance-section">
                    <h4>💡 Importance to Gender Roles</h4>
                    <p>{f.importance}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="figures-analysis">
            <span className="analysis-label">CRITICAL ANALYSIS</span>
            <h2>Women and Men in Philippine History</h2>
            <p>The stories of these individuals show that gender roles have never been completely fixed. Filipino women have participated in leadership, revolution, politics, and community life, while Filipino men have also contributed to education, reform, and social change.</p>
            <p>Studying these historical figures helps us recognize how culture, colonialism, education, and social expectations influenced gender roles in the Philippines.</p>
          </div>
        </div>

      </section>

      {/* ==================== TODAY ==================== */}
      <section id="today" data-section="today" className="section">

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">04</span>
            <span className="eyebrow-label">CONTEMPORARY</span>
          </div>
          <h2 className="section-title">Contemporary Gender Roles</h2>
          <p className="section-description">
            Gender roles in the Philippines are changing as people gain
            greater access to education, employment, technology, leadership,
            and opportunities for social participation.
          </p>
          <div className="card-grid">
            {roles.map((r, i) => (
              <div className="info-card" key={i}>
                <div className="icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <div className="message-box">
            <h2>💙💗 A Changing Society</h2>
            <p>Contemporary Filipino society shows progress toward more flexible gender roles, but traditional expectations and inequalities can still influence people's experiences.</p>
          </div>
        </div>

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">05</span>
            <span className="eyebrow-label">STATISTICS</span>
          </div>
          <h2 className="section-title">Gender Statistics in the Philippines</h2>
          <p className="section-description">
            These figures give a numerical picture of how gender roles
            and opportunities are distributed among Filipinos today.
          </p>
          <div className="stats-grid">
            {statistics.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">{s.value}</div>
                <h3 className="stat-label">{s.label}</h3>
                <p className="stat-description">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="stats-analysis">
            <span className="stats-analysis-label">CRITICAL ANALYSIS</span>
            <h2>What Do These Numbers Tell Us?</h2>
            <p>The numbers show that Filipino women and men now participate in many of the same areas — education, employment, and public life. At the same time, women remain underrepresented in some leadership positions and continue to carry a larger share of unpaid household work.</p>
            <p>Statistics alone do not explain why these differences exist. Culture, family expectations, economic conditions, and social norms all influence the opportunities available to different people.</p>
          </div>
          <div className="stats-note">
            <h2>⚠️ Important Reminder</h2>
            <p>The percentages shown above are approximate placeholders used for layout purposes. Before submitting this project, replace them with the exact figures from official sources such as:</p>
            <ul>
              <li>Philippine Statistics Authority (PSA)</li>
              <li>Philippine Commission on Women (PCW)</li>
              <li>World Bank Gender Data Portal</li>
              <li>UN Gender Inequality Index</li>
            </ul>
            <p>Always include the year of the data and the specific report or publication where each figure came from.</p>
          </div>
        </div>

      </section>

      {/* ==================== ISSUES ==================== */}
      <section id="issues" data-section="issues" className="section">
        <div className="eyebrow">
          <span className="eyebrow-number">06</span>
          <span className="eyebrow-label">GENDER ISSUES</span>
        </div>
        <h2 className="section-title">Gender Issues and Realities</h2>
        <p className="section-description">
          Understanding gender issues allows us to identify stereotypes,
          discrimination, unequal opportunities, and other challenges
          experienced in society.
        </p>
        <div className="card-grid">
          {issues.map((issue, i) => (
            <div className="issue-card" key={i}>
              <div className="issue-icon">{issue.icon}</div>
              <h3>{issue.title}</h3>
              <p>{issue.text}</p>
            </div>
          ))}
        </div>
        <div className="equality-banner">
          <h2>💙💗 Equality Starts With Understanding</h2>
          <p>Gender should not limit a person's ability to learn, work, lead, care for others, or pursue their goals.</p>
        </div>
      </section>

      {/* ==================== ANALYSIS ==================== */}
      <section id="analysis" data-section="analysis" className="section">

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">07</span>
            <span className="eyebrow-label">ANALYSIS</span>
          </div>
          <h2 className="section-title">Analysis: Past vs. Present</h2>
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
            {comparisons.map((c, i) => (
              <div className="comparison-row" key={i}>
                <strong>{c.topic}</strong>
                <p>{c.past}</p>
                <p>{c.present}</p>
              </div>
            ))}
          </div>
          <div className="analysis-box">
            <h2>Our Critical Analysis</h2>
            <p>Philippine gender roles have changed significantly over time. Education, economic development, political participation, social movements, and changing family structures have created more opportunities for women and men.</p>
            <p>However, progress does not mean that all gender inequalities have disappeared. Stereotypes, discrimination, unequal responsibilities, and differences in representation may still affect people.</p>
          </div>
        </div>

        <div className="subsection">
          <div className="eyebrow">
            <span className="eyebrow-number">08</span>
            <span className="eyebrow-label">REFLECTION</span>
          </div>
          <h2 className="section-title">Reflection Corner</h2>
          <p className="section-description">
            Choose a question below and read the reflection answer.
            Think about how gender roles influence Filipino families,
            education, work, media, leadership, and everyday life.
          </p>

          <div className="reflection-box">
            <div className="reflection-icon">💭</div>
            <h2>Choose a Reflection Question</h2>
            <p className="reflection-intro">
              Select a question to explore our group's perspective
              about gender roles in the Philippine context.
            </p>

            <select onChange={handleQuestionChange} defaultValue="">
              <option value="">-- Select a question --</option>
              {questions.map((q, i) => (
                <option value={i} key={i}>{q.question}</option>
              ))}
            </select>

            {selectedQuestion && (
              <div className="reflection-answer">
                <div className="question-label">REFLECTION QUESTION</div>
                <h3>{selectedQuestion.question}</h3>
                <div className="answer-container">
                  <div className="answer-icon">💡</div>
                  <div>
                    <span className="answer-label">Our Reflection</span>
                    <p>{selectedQuestion.answer}</p>
                  </div>
                </div>
                <div className="thinking-box">
                  <h4>🤔 Think About It</h4>
                  <p>How does this question relate to your own family, school, community, or experience as a Filipino student?</p>
                </div>
              </div>
            )}
          </div>

          <div className="critical-reflection">
            <span className="critical-label">GROUP INSIGHT</span>
            <h2>What We Learned</h2>
            <p>Our group learned that gender roles in the Philippines have changed over time. Although traditional expectations are still present in some areas, Filipino women and men increasingly participate in different roles in families, education, employment, leadership, and communities.</p>
            <p>We believe that gender should not be used as a limitation on a person's abilities or opportunities. Understanding the history of gender roles allows us to recognize both the progress that has been made and the challenges that remain in Philippine society.</p>
            <p>As students, we can contribute to positive change by respecting others, avoiding stereotypes, supporting equal opportunities, and encouraging people to pursue their goals based on their abilities and interests.</p>
          </div>
        </div>

      </section>

      {/* ==================== MULTIMEDIA ==================== */}
      <section id="multimedia" data-section="multimedia" className="section">
        <div className="eyebrow">
          <span className="eyebrow-number">09</span>
          <span className="eyebrow-label">MULTIMEDIA</span>
        </div>
        <h2 className="section-title">Multimedia</h2>
        <p className="section-description">
          Visual materials and videos help us better understand the
          development of gender roles in the Philippine context.
        </p>

        <div className="multimedia-video">
          <h2>🎥 Video Presentation</h2>
          <p>This video provides additional information about gender roles and gender equality in Philippine society.</p>
          <video controls>
            <source src={genderRolesVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>

        <div className="multimedia-images">
          <h2>🖼️ Images and Illustrations</h2>
          <div className="media-grid">
            {mediaImages.map((item, i) => (
              <div className="media-card" key={i}>
                <img src={item.image} alt={item.title} />
                <div className="media-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONCLUSION ==================== */}
      <section id="conclusion" data-section="conclusion" className="section conclusion-page">
        <div className="eyebrow">
          <span className="eyebrow-number">10</span>
          <span className="eyebrow-label">CONCLUSION</span>
        </div>
        <h2 className="section-title">Conclusion</h2>
        <p className="section-description">
          Our overall understanding of gender roles in the Philippine context.
        </p>

        <div className="conclusion-card">
          <div className="conclusion-icon">🌏</div>
          <h2>Our Overall Insight</h2>
          <p>Gender roles in the Philippines have changed throughout history. Before and during different colonial periods, Filipino communities developed different expectations about the responsibilities of women and men.</p>
          <p>Education, economic development, political participation, social movements, technology, and changing family structures have contributed to new opportunities and more flexible gender roles.</p>
          <p>However, stereotypes and inequalities continue to affect some individuals and communities. Gender expectations can influence career choices, family responsibilities, leadership opportunities, education, and how people are represented in media.</p>
          <p>Our group believes that understanding history and recognizing present-day realities can help people challenge unfair stereotypes. A more inclusive society can be developed when people are given respect, equal opportunities, and the freedom to contribute according to their abilities rather than assumptions based on gender.</p>
        </div>

        <div className="final-message">
          <h2>💙 Respect • 💗 Equality • 🟣 Inclusion</h2>
          <p>Gender should not determine the limits of a person's dreams, abilities, responsibilities, or opportunities.</p>
        </div>
      </section>

      {/* ==================== REFERENCES ==================== */}
      <section id="references" data-section="references" className="section references-page">
        <div className="eyebrow">
          <span className="eyebrow-number">11</span>
          <span className="eyebrow-label">REFERENCES</span>
        </div>
        <h2 className="section-title">References</h2>
        <p className="section-description">
          The following sources should be replaced or completed with
          the exact materials used by the group.
        </p>

        <div className="reference-list">
          {references.map((ref, i) => (
            <div className="reference-card" key={i}>
              <h2>{ref.category}</h2>
              <ul>
                {ref.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="citation-note">
          <h2>Important Citation Reminder</h2>
          <p>Before submitting the project, replace the general reference descriptions above with the exact titles, authors, publication dates, URLs, books, journal articles, images, and videos actually used by your group.</p>
          <p>Every borrowed image, video, statistic, quotation, or important information should be properly acknowledged.</p>
        </div>
      </section>
    </>
  );
}

export default Home;