"use client";
import { getNavLinks } from "@/config/navlinks";
import styles from "./nav.module.scss";
import { LazyMotion, m, domAnimation, useScroll } from "framer-motion";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <LazyMotion features={domAnimation} strict>
      <nav className={styles.nav}>
        <m.div
          style={{ scaleX: scrollYProgress }}
          className={styles.progress}
        />
        <div className={styles.progressBackground} />
        <div className={styles.navLinks}>
          {getNavLinks(styles).map(
            ({ name, icon, link, external, download }) => (
              <div key={name} className={styles.navItem}>
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
              </div>
            )
          )}
        </div>
      </nav>
    </LazyMotion>
  );
}
