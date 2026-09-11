import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historical from "./components/Historical";
import Contemporary from "./components/Contemporary";
import Comparison from "./components/Comparison";
import KeyFigures from "./components/KeyFigures";
import Issues from "./components/Issues";
import Reflection from "./components/Reflection";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const goToPage = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Navbar setPage={goToPage} />

      {page === "home" && <Home setPage={goToPage} />}
      {page === "historical" && <Historical setPage={goToPage} />}
      {page === "contemporary" && <Contemporary setPage={goToPage} />}
      {page === "comparison" && <Comparison setPage={goToPage} />}
      {page === "figures" && <KeyFigures setPage={goToPage} />}
      {page === "issues" && <Issues setPage={goToPage} />}
      {page === "reflection" && <Reflection setPage={goToPage} />}
    </div>
  );
}

export default App;