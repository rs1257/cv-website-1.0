import Background from "@/components/background/background";
import styles from "./page.module.scss";
import OutlinedTimeline from "@/components/timeline/timeline";

export default function Home() {
  return (
    <div className={styles.main}>
      <Background />
      <OutlinedTimeline />
    </div>
  );
}
