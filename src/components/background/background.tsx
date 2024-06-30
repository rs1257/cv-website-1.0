"use client";
import Typed from "typed.js";
import styles from "./background.module.scss";
import { useEffect, useRef } from "react";
import Section from "../section/section";
import Image from "next/image";

export default function Background() {
  const typewriterElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriterElement.current, {
      strings: [
        "Software Engineer",
        "Gamer",
        "Fitness Freak",
        "Tech Enthusiast",
        "Animal Lover",
        "Disney Nerd",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <Image
            src="/headshot.webp"
            alt="Ryan Smith"
            className={styles.avatar}
            width={200}
            height={200}
          />
          <div className={styles.overlay} />
        </div>
        <div>
          <h1 className={styles.title}>Ryan Smith</h1>
          <span className={styles.typewriter} ref={typewriterElement} />
          <p>lsknsfl sflbnsfl slfb sfl bslf b</p>
        </div>
      </div>
    </Section>
  );
}
