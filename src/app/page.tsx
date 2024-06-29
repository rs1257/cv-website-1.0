import Background from "@/components/background/background";
import styles from "./page.module.scss";
import OutlinedTimeline from "@/components/timeline/timeline";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.main}>
      <Background />
      <Projects />
      <Skills />
      <OutlinedTimeline />
    </div>
  );
}
