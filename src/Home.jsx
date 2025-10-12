import { useState } from "react";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [myString, setMyString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log the values
    console.log("Name:", name);
    console.log("My String:", myString);

    // Clear inputs
    setName("");
    setMyString("");
  };

  return (
    <div className="home">
      <h2>Welcome to My First React Project!</h2>
      <p>Enter your name and a string below:</p>

      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your String"
          value={myString}
          onChange={(e) => setMyString(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
