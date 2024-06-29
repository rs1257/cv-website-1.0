"use client";
import { SKILLS } from "@/config/globals";
import styles from "./skills.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
import Section from "../section/section";
import { skills } from "@/config/skills";

export default function Skills() {
  return (
    <Section id={SKILLS} header="Skills" text="Some of the things I know">
      <div className={styles.skillsContainer}>
        <LazyMotion features={domAnimation} strict>
          {skills.map(({ icon, title }, index) => {
            return (
              <m.div
                whileHover={{ scale: 1.1 }}
                key={index}
                className={styles.iconCard}
              >
                <span>{icon}</span>
                <h4>{title}</h4>
              </m.div>
            );
          })}
        </LazyMotion>
      </div>
    </Section>
  );
}
