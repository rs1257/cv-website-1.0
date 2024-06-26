import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faClipboardList,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./nav.module.scss";

const links = [
  {
    name: "CV",
    icon: <FontAwesomeIcon icon={faDownload} className={styles.icon} />,
  },
  {
    name: "Projects",
    icon: <FontAwesomeIcon icon={faCode} className={styles.icon} />,
  },
  {
    name: "Skills",
    icon: <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />,
  },
  {
    name: "Github",
    icon: <FontAwesomeIcon icon={faGithub} className={styles.icon} />,
  },
  {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />,
  },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map(({ name, icon }) => (
        <div key={name} className={styles.navItem}>
          {icon}
          <span>{name}</span>
        </div>
      ))}
    </nav>
  );
}
