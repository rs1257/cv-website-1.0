import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faClipboardList,
  faCode,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./nav.module.scss";
import {
  CV,
  EXPERIENCE,
  GITHUB,
  LINKEDIN,
  PROJECTS,
  SKILLS,
} from "@/app/globals";

const links = [
  {
    name: "CV",
    icon: <FontAwesomeIcon icon={faDownload} className={styles.icon} />,
    link: CV,
    download: true,
  },
  {
    name: "Projects",
    icon: <FontAwesomeIcon icon={faCode} className={styles.icon} />,
    link: PROJECTS,
  },
  {
    name: "Skills",
    icon: <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />,
    link: SKILLS,
  },
  {
    name: "Experience",
    icon: <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />,
    link: EXPERIENCE,
  },
  {
    name: "Github",
    icon: <FontAwesomeIcon icon={faGithub} className={styles.icon} />,
    link: GITHUB,
    external: true,
  },
  {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />,
    link: LINKEDIN,
    external: true,
  },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map(({ name, icon, link, external, download }) => (
        <div key={name} className={styles.navItem}>
          <a
            href={link}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...(download ? { download: true } : {})}
          >
            {icon}
            <span>{name}</span>
          </a>
        </div>
      ))}
    </nav>
  );
}
