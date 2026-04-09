import "./Home.css";
import { useState, useEffect } from "react";


import Asi1 from "../assets/Asi1.jpg";
import Asi2 from "../assets/Asi2.jpg";
import Asi3 from "../assets/Asi3.jpg";
import Asi4 from "../assets/Asi4.jpeg";
import Asi5 from "../assets/Asi5.jpeg";
import Asi6 from "../assets/Asi6.jpeg";
import Asi7 from "../assets/Asi7.jpeg";
import Asi8 from "../assets/Asi8.jpeg";
import Asi9 from "../assets/Asi9.jpeg";
import Asi10 from "../assets/Asi10.jpg";
import Asi11 from "../assets/Asi11.jpg";
import Asi12 from "../assets/Asi12.jpg";
import Asi13 from "../assets/Asi13.jpg";
import Asi14 from "../assets/Asi14.jpg";
import Asi15 from "../assets/Asi15.jpg";
import Asi16 from "../assets/Asi16.jpg";
import Asi17 from "../assets/Asi17.jpeg";

const photos = [
  Asi1,
  Asi2,
  Asi3,
  Asi4,
  Asi5,
  Asi6,
  Asi7,
  Asi8,
  Asi9,
  Asi10,
  Asi11,
  Asi12,
  Asi13,
  Asi14,
  Asi15,
  Asi16,
  Asi17
];

function Home() {
  const [randomPhoto, setRandomPhoto] = useState("");

  useEffect(() => {
    const picked = photos[Math.floor(Math.random() * photos.length)];
    setRandomPhoto(picked);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-dashboard">
        
        {/* Left Column: Image & Quick Stats */}
        <div className="profile-column">
          <div className="image-card">
            {randomPhoto && (
              <img src={randomPhoto} alt="אסי קריניץ" className="profile-pic" />
            )}
            <div className="image-halo"></div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="content-column">
          <header className="hero-header">
            <h1 className="hero-heading">
              אהלן, אני <span className="gradient-text">אסי קריניץ</span> 👋
            </h1>
            <h2 className="hero-subheading">Full Stack Developer</h2>
          </header>

          <section className="about-section slide-up">
            <p className="lead-text">
              מפתח תוכנה מנוסה עם מעל ל-<strong>3 שנות ניסיון</strong> בפיתוח ותחזוקת מערכות 
              SaaS ויישומי Web עבור סביבות Production וללקוחות אנטרפרייז גדולים.
            </p>
            <p className="details-text">
              יש לי ניסיון מעשי רב בהובלת פיצ'רים מקצה לקצה: החל מעיצוב ופיתוח ממשק משתמש (UI/UX) ב-<strong>Angular ו-React</strong>, דרך כתיבת לוגיקה עסקית מורכבת ו-REST APIs ב-<strong>ASP.NET MVC ו-Node.js</strong>, ועד לתכנון יעיל וטיוב ביצועים במסדי נתונים של <strong>SQL Server</strong>. 
            </p>
            <p className="details-text">
              אני ידוע בכתיבת <strong>קוד נקי, תחזוקתי ויעיל</strong>, בעל יכולת למידה מהירה ועצמאית, מיומן ברפקטורינג של קוד קיים, אינטגרציות מורכבות (כגון מערכות סליקה מתקדמות - Tranzila, מערכות SMS, מיילים ועוד) ומחפש תמיד כיצד לשפר את יציבות המערכת וחווית המשתמש.
            </p>
          </section>

          <div className="stats-grid slide-up-delayed">
            <div className="stat-box">
              <span className="stat-number">3+</span>
              <span className="stat-label">שנות ניסיון</span>
            </div>
            <div className="stat-box">
              <span className="stat-icon">🎓</span>
              <span className="stat-label">הנדסאי תוכנה מצטיין</span>
            </div>
            <div className="stat-box">
              <span className="stat-icon">💻</span>
              <span className="stat-label">טכנאי מחשבים מוסמך</span>
            </div>
          </div>

          <section className="tech-section slide-up-delayed-2">
            <h3>Tech Stack מרכזי</h3>
            <div className="tech-tags">
              <span className="tag angular">Angular (v5-18)</span>
              <span className="tag react">React</span>
              <span className="tag ts">TypeScript</span>
              <span className="tag csharp">C# / ASP.NET MVC</span>
              <span className="tag node">Node.js (Express)</span>
              <span className="tag sql">SQL Server</span>
              <span className="tag mongo">MongoDB</span>
              <span className="tag git">Git / GitHub</span>
              <span className="tag iis">IIS</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Home;
