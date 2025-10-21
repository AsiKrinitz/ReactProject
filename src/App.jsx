import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Secret from "./Secret";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";

function App() {
  if (window.location.pathname === "/ReactProject") {
    window.location.replace("/ReactProject/");
  }
  return (
    <Router basename="/ReactProject">
      {/* <-- must wrap all routes */}
      <div className="appRoot">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
