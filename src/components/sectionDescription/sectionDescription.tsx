import styles from "./sectionDescription.module.scss";

interface SectionDescriptionProps {
  text: string;
}

export default function SectionDescription({ text }: SectionDescriptionProps) {
  return <p className={styles.description}>{text}</p>;
}
