import "./Home.css";
import { Link } from "react-router-dom";
import Asi1 from "../assets/Asi1.jpg";
import Asi2 from "../assets/Asi2.jpg";
import Asi3 from "../assets/Asi3.jpg";
import Asi4 from "../assets/Asi4.jpg";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">אהלן חברים! ברוכים הבאים לאתר שלי 👋</h1>

      {/* Container with side images and content */}
      <div className="content-with-images">
        {/* Right side images */}
        <div className="imageColumn">
          <img src={Asi1} alt="Asi1" />
          <img src={Asi2} alt="Asi2" />
        </div>

        {/* Center content */}
        <div className="intro-card">
          <p>
            נעים להכיר, אני <strong>אסי קריניץ</strong>, בן 29 מקריית חיים, חי
            עם בת זוגתי המדהימה והכלב שלנו ♥.
            <br />
            כבר שלוש שנים אני עובד כ<strong>מפתח Full Stack</strong> בבית התוכנה{" "}
            <strong>GoNet</strong> – תפקיד שאני באמת נהנה ממנו. אני אוהב ליצור,
            ללמוד ולהפוך רעיון לקוד שעובד.
          </p>

          <p>
            תמיד הייתי מחובר לעולם המחשבים. עוד מגיל צעיר הייתי גיימר, וזה פיתח
            בי את הרצון להשתפר כל הזמן ולעשות כל דבר בצורה הטובה ביותר.
          </p>

          <p>
            את דרכי המקצועית התחלתי אחרי שסיימתי לימודי{" "}
            <strong>הנדסאי תוכנה</strong> במכללת אורט ביאליק, שם גם השתתפתי
            בתוכנית מצוינות של המכללה. במהלך הלימודים הצלחתי להשתלב בעבודה
            הראשונה שלי כמתכנת – תפקיד שבו אני נמצא עד היום.
          </p>

          <p>
            לפני כן שירתתי כלוחם הגנה אווירית במערכת הנשק{" "}
            <strong>פטריוט</strong> בחיל האוויר, תקופה שבה למדתי משמעת, אחריות
            ועבודת צוות – ערכים שמלווים אותי גם היום בעולם הפיתוח.
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
            אני תמיד מחפש את האתגר הבא – מקום שאוכל להמשיך בו לצמוח, ללמוד
            ולהשפיע. אם אהבתם את מה שקראתם ומרגישים שאוכל להשתלב אצלכם, אשמח
            לשוחח 🙂
          </p>

          {/* <p>
              מי שרוצה לקרוא את הגירסה הארוכה והמקורית שנכתבה ללא Chat GPT מוזמן{" "}
              <Link
                to="/secret"
                style={{
                  color: "#9300dfc4",
                  textDecoration: "underline",
                }}
              >
                ללחוץ כאן
              </Link>
            </p> */}
        </div>

        {/* Left side images */}
        <div className="imageColumn">
          <img src={Asi3} alt="Asi3" />
          <img src={Asi4} alt="Asi4" />
        </div>
      </div>
    </div>
  );
}

export default Home;
