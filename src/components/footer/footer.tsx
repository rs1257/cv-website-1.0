import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <b>Ryan Smith</b>
        <div>&copy; {currentYear} All rights reserved.</div>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </div>
    </footer>
  );
}
