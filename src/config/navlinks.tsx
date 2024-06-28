import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faClipboardList,
  faCode,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  CV,
  EXPERIENCE,
  GITHUB,
  LINKEDIN,
  PROJECTS,
  SKILLS,
} from "@/config/globals";

export const getNavLinks = (styles: { [key: string]: string }) => [
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
