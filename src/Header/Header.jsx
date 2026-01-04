import { Link } from "react-router-dom";
import { FaHome, FaCode, FaEnvelope } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">האתר של אסי קריניץ</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FaHome className="nav-icon" aria-hidden="true" />
              בית
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaCode className="nav-icon" aria-hidden="true" />
              פרויקטים
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaEnvelope className="nav-icon" aria-hidden="true" />
              צור קשר/קורות חיים
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
