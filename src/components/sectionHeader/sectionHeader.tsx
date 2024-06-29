import styles from "./sectionHeader.module.scss";

interface SectionHeaderProps {
  id: string;
  header: string;
}

export default function SectionHeader({ id, header }: SectionHeaderProps) {
  return (
    <h1 className={styles.header} id={id}>
      {header}
    </h1>
  );
}
