import { useState } from "react";
import "./Navbar.css";

function Navbar({ setPage, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page) => {
    setPage(page);
    setMenuOpen(false);
  };

  const links = [
    ["home", "Home"],
    ["understanding", "Gender Roles"],
    ["historical", "History"],
    ["contemporary", "Contemporary"],
    ["issues", "Issues"],
    ["comparison", "Analysis"],
    ["multimedia", "Multimedia"],
    ["reflection", "Reflection"],
    ["conclusion", "Conclusion"],
    ["references", "References"],
  ];

  return (
    <nav className="navbar">
      <button className="logo" onClick={() => navigate("home")}>
        <span>Gender</span> PH
      </button>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(([page, label]) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => navigate(page)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;