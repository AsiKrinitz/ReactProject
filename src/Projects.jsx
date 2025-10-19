import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { SiAngular, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

import JobFinderLogo from "./assets/JobfinderLogoNew.png";

function Projects() {
  return (
    <div className="projectsSection">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💼 הפרויקטים שלי
      </motion.h1>
      <div className="projectCard">
        {/* --- Title + Subtitle --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="projectTitleGroup"
        >
          <img
            className="projectLogo"
            src={JobFinderLogo}
            alt="JobFinder Logo"
          />
          <h2 className="mainTitle">JobFinder</h2>
          <h3 className="subTitle">אתר חיפוש עבודה חכם</h3>
        </motion.div>

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
          <li>הרשמה והתחברות עם שמירה למסד נתונים</li>
          <li>יצירת קורות חיים וניהול פרופיל אישי</li>
          <li>הוספת משרות חדשות ועריכתן ע"י מעסיקים</li>
          <li>ממשק ניהול ייעודי למעסיקים</li>
          <li>חיפוש וסינון משרות לפי תחום או מיקום</li>
        </ul>

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
    </div>
  );
}

export default Projects;
