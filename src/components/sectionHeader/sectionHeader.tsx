import styles from "./sectionHeader.module.scss";

interface SectionHeaderProps {
  id: string;
  header: string;
}

export default function SectionHeader({ id, header }: SectionHeaderProps) {
  return (
    <>
      <span className={styles.hiddenAnchor} id={id} />
      <h1 className={styles.header}>{header}</h1>
    </>
  );
}
