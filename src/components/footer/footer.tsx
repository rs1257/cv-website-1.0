import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.scss";
import { CV, GITHUB, LINKEDIN } from "@/app/globals";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <b>Ryan Smith</b>
        <div>&copy; {currentYear} All rights reserved.</div>
      </div>
      <div className={styles.iconContainer}>
        <a href={CV} download>
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        </a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}
