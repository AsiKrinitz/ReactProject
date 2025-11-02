import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>♥♥ כל הזכויות שמורות לאסי קריניץ ♥♥</h2>

      <ul className="social-links">
        <li>
          <a
            href="https://www.facebook.com/ShahafKrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            פייסבוק&nbsp;
            <img
              alt="Facebook icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/asikrinitz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            אינסטגרם&nbsp;
            <img
              alt="Instagram icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/asi-krinitz-25351223b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            לינקדאין&nbsp;
            <img
              alt="LinkedIn icon"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
