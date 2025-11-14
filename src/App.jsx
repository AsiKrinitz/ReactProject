import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import ErrorPage from "./ErrorPage/ErrorPage";

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
