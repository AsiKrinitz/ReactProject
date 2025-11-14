import "./Home.css";
import Asi5 from "../assets/Asi5.jpeg";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">אהלן חברים! ברוכים הבאים לאתר שלי 👋</h1>

      <div className="intro-card">
        <div className="text-content">
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
            <strong>טכנאי מחשבים</strong> במכללה למנהל בחיפה.
          </p>

          <p>
            אני תמיד מחפש את האתגר הבא – מקום שאוכל להמשיך לצמוח בו, ללמוד
            ולהשפיע. אם אהבתם את מה שקראתם ומרגישים שאוכל להשתלב אצלכם, אשמח
            לשוחח ♥
          </p>
        </div>

        <img src={Asi5} alt="אסי קריניץ" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
