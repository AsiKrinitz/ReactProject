import "./Home.css";
import { useState, useEffect } from "react";

import Asi1 from "../assets/Asi1.jpg";
import Asi2 from "../assets/Asi2.jpg";
import Asi3 from "../assets/Asi3.jpg";
import Asi4 from "../assets/Asi4.jpg";
import Asi5 from "../assets/Asi5.jpeg";
import Asi6 from "../assets/Asi6.jpeg";
import Asi7 from "../assets/Asi7.jpeg";
import Asi8 from "../assets/Asi8.jpeg";
import Asi9 from "../assets/Asi9.jpeg";
import Asi10 from "../assets/Asi10.jpeg";

const photos = [Asi1, Asi2, Asi3, Asi4, Asi5, Asi6, Asi7, Asi8, Asi9, Asi10];

function Home() {
  const [randomPhoto, setRandomPhoto] = useState("");

  useEffect(() => {
    const picked = photos[Math.floor(Math.random() * photos.length)];
    setRandomPhoto(picked);
  }, []);

  return (
    <div className="home">
      <h1 className="home-title">אהלן חברים! ברוכים הבאים לאתר שלי 👋</h1>

      <div className="intro-card">
        <div className="text-content">
          <h2 className="sub-title">קצת עליי</h2>
          <p>
            נעים להכיר, אני <strong>אסי קריניץ</strong>, בן 29 מקריית חיים, חי
            עם בת זוגתי המדהימה והכלב שלנו ♥
            <br />
            כבר שלוש שנים אני עובד כ<strong>מפתח Full Stack</strong> בבית התוכנה{" "}
            <strong>GoNet</strong> – תפקיד שאני באמת נהנה ממנו. אני אוהב ליצור,
            ללמוד ולהפוך רעיון לקוד שעובד.
          </p>

          <p>
            את דרכי המקצועית התחלתי אחרי שסיימתי לימודי{" "}
            <strong>הנדסאי תוכנה</strong> במכללת אורט ביאליק, שם גם השתתפתי
            בתוכנית מצוינות של המכללה. במהלך הלימודים הצלחתי להשתלב בעבודה
            הראשונה שלי כמתכנת – תפקיד שבו אני נמצא עד היום.
          </p>

          <p>
            בעבודה שלי אני משתמש על בסיס יומיומי ב:
            <br />
            <strong>Angular</strong> - Frontend
            <br />
            <strong>Asp.Net</strong> - Backend
            <br />
            <strong>SQL Server</strong> - Database
            <br />
            <strong>GitHub</strong> - Version Control
          </p>

          <p>
            לאחרונה הרחבתי את הידע שלי גם לתחום החומרה והמערכות, במסגרת קורס{" "}
            <strong>טכנאי מחשבים</strong> במכללה למנהל בחיפה, אז יצא שאני גם
            מתכנת וגם טכנאי מחשבים =)
          </p>

          <p>
            חוץ מעולם התכנות והמחשבים, אני אוהב לשחק פינג פונג ואני גם מתאמן
            באופן קבוע, לפני זה התאמנתי תקופה באיגרוף תאילנדי וגם MMA ובכללי אני
            אוהב לצפות ב UFC.
            <br></br>
            בנוסף בשנה האחרונה ניכנסתי לעולם שוק ההון, השקעות ומסחר, לקחתי את זה
            מאוד ברצינות וכמו כל דבר שאני עושה בחיים אני מנסה לעשות הכי טוב שאני
            יכול! וגם מתי שלא הולך אני לא מוותר, לומד מטעויות וממשיך הלאה!
            <br></br>
            וכמובן שאני חולה על לטייל בארץ המדהימה שלנו ובעולם כולו!
          </p>

          <p>
            עכשיו אני מחפש את האתגר הבא שלי – מקום שאוכל להמשיך לצמוח בו, ללמוד
            ולהשפיע.
            <br></br>
            אם אהבתם את מה שקראתם ומרגישים שאוכל להשתלב אצלכם, אשמח לשוחח ♥
          </p>
        </div>
        {randomPhoto && (
          <img src={randomPhoto} alt="אסי קריניץ" className="profile-image" />
        )}{" "}
      </div>
    </div>
  );
}

export default Home;
