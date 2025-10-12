import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">האתר של אסי קריניץ</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">בית</Link>
          </li>
          <li>
            <Link to="/about">קצת עלי</Link>
          </li>
          <li>
            <Link to="/contact">צור קשר</Link>
          </li>
          <li>
            <Link to="/projects">פרויקטים</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
