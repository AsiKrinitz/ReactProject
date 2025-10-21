import { Link } from "react-router-dom";
import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <div className="errorPage">
      <div className="errorCard container">
        <h1 className="errorCode">404</h1>
        <h2 className="errorTitle">העמוד לא נמצא</h2>
        <p className="errorMsg">
          מצטערים, הקישור שביקשת אינו קיים או הוזן לא נכון.
        </p>

        <div className="errorActions">
          <Link to="/" className="primaryBtn">
            חזור לדף הבית
          </Link>
          <Link to="/contact" className="ghostBtn">
            צור קשר
          </Link>
        </div>
      </div>
    </div>
  );
}
