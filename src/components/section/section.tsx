import SectionDescription from "../sectionDescription/sectionDescription";
import SectionHeader from "../sectionHeader/sectionHeader";
import styles from "./section.module.scss";

interface SectionProps {
  id?: string;
  header?: string;
  text?: string;
  children: React.JSX.Element;
}

export default function Section({ id, header, children, text }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        {id && header && <SectionHeader id={id} header={header} />}
        {text && <SectionDescription text={text} />}
      </div>
      {children}
    </div>
  );
}
