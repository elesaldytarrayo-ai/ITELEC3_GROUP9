import { useState } from "react";
import "./Navbar.css";

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const links = [
    ["home", "Home"],
    ["history", "History"],
    ["today", "Today"],
    ["issues", "Issues"],
    ["analysis", "Analysis"],
    ["multimedia", "Multimedia"],
    ["conclusion", "Conclusion"],
    ["references", "References"],
  ];

  return (
    <nav className="navbar">
      <button className="logo" onClick={() => scrollTo("home")}>
        BSIT-3C <span>|</span> GROUP 6
      </button>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <button
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollTo(id)}
          >
            <span className="nav-dot" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;