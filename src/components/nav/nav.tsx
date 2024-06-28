import { getNavLinks } from "@/config/navlinks";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {getNavLinks(styles).map(({ name, icon, link, external, download }) => (
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
