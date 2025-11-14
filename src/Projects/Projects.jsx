import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { SiAngular, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

import JobFinderLogo from "../assets/JobfinderLogoNew.png";

function Projects() {
  return (
    <div className="projectsSection">
      <div className="projectCard">
        {/* --- Title + Subtitle --- */}
        <div className="projectTitleGroup">
          <img
            className="projectLogo"
            src={JobFinderLogo}
            alt="JobFinder Logo"
          />
          <h2 className="mainTitle">JobFinder</h2>
          <h3 className="subTitle">אתר חיפוש עבודה חכם</h3>
        </div>

        <p>
          אתר שבניתי כפרויקט גמר במכללה, שנועד לחבר בין מחפשי עבודה לבין
          מעסיקים. המערכת כוללת הרשמה, יצירת קורות חיים, פרסום משרות, ניהול
          הרשאות ותפקידים, וממשק ניהול ייעודי למעסיקים.
        </p>

        {/* --- Technologies Section --- */}
        <div className="techIcons">
          <div className="techItem">
            <SiAngular />
            <h4>Frontend</h4>
            <p>Angular (Version 15)</p>
          </div>
          <div className="techItem">
            <SiNodedotjs />
            <h4>Backend</h4>
            <p>Node</p>
          </div>
          <div className="techItem">
            <SiMongodb />
            <h4>Database</h4>
            <p>MongoDB</p>
          </div>
          <div className="techItem">
            <FaGithub />
            <h4>Version Control</h4>
            <p>Git & GitHub</p>
          </div>
        </div>

        <ul className="featuresList">
          <li>הרשמה והתחברות מאובטחת</li>
          <li>יצירת קורות חיים וניהול פרופיל אישי</li>
          <li>הוספת משרות חדשות ועריכתן ע"י מעסיקים</li>
          <li>ממשק ניהול ייעודי למעסיקים</li>
          <li>חיפוש וסינון משרות לפי תחום או מיקום</li>
        </ul>

        <h4>קישורים לפרויירט ב - GitHub</h4>

        <div className="links">
          <a
            href="https://github.com/AsiKrinitz/WorkFind"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Client
          </a>
          <a
            href="https://github.com/AsiKrinitz/WorkFindServer"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <FaGithub /> Server
          </a>
        </div>
      </div>

      {/* Responsive Video Container */}
      <div className="videoContainer">
        <iframe
          src="https://www.youtube.com/embed/eU64Wi9NWAw?si=vqGY071jIQ_CC1da"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p style={{ maxWidth: "800px", margin: "20px auto", padding: "0 20px" }}>
        שכחתי להגיד את זה בסירטון אז אני ארשום את זה פה... כל האתר או יותר נכון
        הגירסאות של האתר היו מנוהלות ב GitHub מהתחלה ועד הסוף.
      </p>
    </div>
  );
}

export default Projects;
