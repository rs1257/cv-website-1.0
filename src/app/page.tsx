import Background from "@/components/background/background";
import styles from "./page.module.scss";
import OutlinedTimeline from "@/components/timeline/timeline";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div className={styles.main}>
      <Background />
      <Skills />
      <OutlinedTimeline />
    </div>
  );
}
