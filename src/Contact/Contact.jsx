import "./Contact.css";

function Contact() {
  return (
    <div className="contactImage">
      <h1>צור קשר</h1>
      <h2 className="contactName">אסי קריניץ</h2>

      <div className="contactCard">
        <p>טלפון: 052-7458800</p>
        <p>אימייל: AsiKrinitz@gmail.com</p>
      </div>

      {/* Styled Resume Section */}
      <div className="resumeSection">
        <h3 className="resumeTitle">קורות חיים</h3>
        <div className="resumeButtons">
          <a
            href={`${import.meta.env.BASE_URL}AsiKrinitzFullStackHebrew.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeButton hebrew"
          >
            <span className="icon">📄</span>
            <span className="text">גרסה בעברית</span>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}AsiKrinitzFullStack.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeButton english"
          >
            <span className="icon">📄</span>
            <span className="text">English Version</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
