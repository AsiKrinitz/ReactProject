import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Secret from "./Secret";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/ReactProject">
      {" "}
      {/* <-- must wrap all routes */}
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
