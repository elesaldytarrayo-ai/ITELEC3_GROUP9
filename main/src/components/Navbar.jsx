import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage("home")}>
        <span>Gender</span> PH
      </div>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("historical")}>History</button>
        <button onClick={() => setPage("contemporary")}>Modern</button>
        <button onClick={() => setPage("comparison")}>Compare</button>
        <button onClick={() => setPage("figures")}>Figures</button>
        <button onClick={() => setPage("issues")}>Issues</button>
        <button onClick={() => setPage("reflection")}>Reflection</button>
      </div>
    </nav>
  );
}

export default Navbar;