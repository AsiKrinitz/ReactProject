import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate(); // ← React Router hook

  return (
    <div className="homeImage">
      <h2>Welcome to My First React Project!</h2>

      <button onClick={() => navigate("/secret")} className="secret-button">
        Go to Secret Page
      </button>
    </div>
  );
}

export default Home;
