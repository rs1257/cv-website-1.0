"use client";
import { getNavLinks } from "@/config/navlinks";
import styles from "./nav.module.scss";
import { LazyMotion, m, domAnimation } from "framer-motion";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {getNavLinks(styles).map(({ name, icon, link, external, download }) => (
        <div key={name} className={styles.navItem}>
          <LazyMotion features={domAnimation} strict>
            <m.a
              whileHover={{ scale: 1.2 }}
              href={external || download ? link : `#${link}`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(download ? { download: true } : {})}
            >
              {icon}
              <span>{name}</span>
            </m.a>
          </LazyMotion>
        </div>
      ))}
    </nav>
  );
}
