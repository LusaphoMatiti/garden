import { pageLinks } from "../data";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;

          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-link"
                rel="noreferrer"
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        Copyright &copy; LMDevPro.
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>

      <p className="footer-note">
        Web Application created and maintained by
        <a
          href="https://lmdevpro.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LMDevPro
        </a>
        .
      </p>
    </footer>
  );
};
export default Footer;
