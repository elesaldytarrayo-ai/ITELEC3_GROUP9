import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Understanding from "./components/Understanding";
import Historical from "./components/Historical";
import Contemporary from "./components/Contemporary";
import Comparison from "./components/Comparison";
import KeyFigures from "./components/KeyFigures";
import Issues from "./components/Issues";
import Multimedia from "./components/Multimedia";
import Reflection from "./components/Reflection";
import Conclusion from "./components/Conclusion";
import References from "./components/References";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const goToPage = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Navbar setPage={goToPage} currentPage={page} />

      {page === "home" && <Home setPage={goToPage} />}

      {page === "understanding" && (
        <Understanding setPage={goToPage} />
      )}

      {page === "historical" && (
        <Historical setPage={goToPage} />
      )}

      {page === "figures" && (
        <KeyFigures setPage={goToPage} />
      )}

      {page === "contemporary" && (
        <Contemporary setPage={goToPage} />
      )}

      {page === "issues" && (
        <Issues setPage={goToPage} />
      )}

      {page === "comparison" && (
        <Comparison setPage={goToPage} />
      )}

      {page === "multimedia" && (
        <Multimedia setPage={goToPage} />
      )}

      {page === "reflection" && (
        <Reflection setPage={goToPage} />
      )}

      {page === "conclusion" && (
        <Conclusion setPage={goToPage} />
      )}

      {page === "references" && (
        <References setPage={goToPage} />
      )}
    </div>
  );
}

export default App;