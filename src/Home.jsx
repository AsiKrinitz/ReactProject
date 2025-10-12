import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate(); // ← React Router hook

  return (
    <div className="homeImage">
      <h1 className="title">ברוכים הבאים לאתר שלי!</h1>

      <p className="me">אהלן חברים שמח שאתם פה באתר שלי (=</p>

      {/* <button onClick={() => navigate("/secret")} className="secret-button">
        Go to Secret Page
      </button> */}
    </div>
  );
}

export default Home;
