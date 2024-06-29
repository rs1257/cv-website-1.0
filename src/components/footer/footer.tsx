"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.scss";
import { CV, GITHUB, LINKEDIN } from "@/config/globals";
import { motion } from "framer-motion";

const onHoverScale = 1.2;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <b>Ryan Smith</b>
        <div>&copy; {currentYear} All rights reserved.</div>
      </div>
      <div className={styles.iconContainer}>
        <motion.a whileHover={{ scale: onHoverScale }} href={CV} download>
          <FontAwesomeIcon icon={faDownload} className={styles.icon} />
        </motion.a>
        <motion.a
          whileHover={{ scale: onHoverScale }}
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </motion.a>
        <motion.a
          whileHover={{ scale: onHoverScale }}
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </motion.a>
      </div>
    </footer>
  );
}
