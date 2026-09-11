import "./Multimedia.css";

import precolonialWomen from "../assets/images/precolonial-women.jpg";
import filipinoWomen from "../assets/images/filipino-women.jpg";
import genderEquality from "../assets/images/gender-equality.jpg";

import genderRolesVideo from "../assets/videos/gender-roles.mp4";

function Multimedia({ setPage }) {
  const images = [
    {
      image: precolonialWomen,
      title: "Women in Pre-Colonial Philippines",
      description:
        "An illustration representing the roles and participation of women in pre-colonial Philippine communities.",
    },
    {
      image: filipinoWomen,
      title: "Filipino Women in Society",
      description:
        "Women have contributed to Philippine families, education, work, leadership, and community life.",
    },
    {
      image: genderEquality,
      title: "Gender Equality",
      description:
        "Gender equality promotes respect, fairness, and equal opportunities for everyone.",
    },
  ];

  return (
    <section className="page multimedia-page">
      <h1 className="section-title">
        Multimedia
      </h1>

      <p className="section-description">
        Visual materials and videos help us better understand the
        development of gender roles in the Philippine context.
      </p>

      {/* VIDEO SECTION */}
      <div className="multimedia-video">
        <h2>🎥 Video Presentation</h2>

        <p>
          This video provides additional information about gender roles
          and gender equality in Philippine society.
        </p>

        <video controls>
          <source src={genderRolesVideo} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>

      {/* IMAGE SECTION */}
      <div className="multimedia-images">
        <h2>🖼️ Images and Illustrations</h2>

        <div className="media-grid">
          {images.map((item, index) => (
            <div className="media-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="media-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
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

export default Multimedia;