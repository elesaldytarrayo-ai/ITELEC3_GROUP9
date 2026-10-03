import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScrollable = docHeight - winHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollProgress(progress);

      const probe = scrollTop + winHeight / 3;
      const sections = document.querySelectorAll("[data-section]");
      let current = "home";

      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top + scrollTop;
        if (top <= probe) {
          current = sec.dataset.section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar activeSection={activeSection} />

      <main>
        <Home />
      </main>

      <button
        className={`back-to-top ${scrollProgress > 12 ? "visible" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;