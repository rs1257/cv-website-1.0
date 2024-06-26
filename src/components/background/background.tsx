"use client";
import Avatar from "@mui/material/Avatar";
import Typed from "typed.js";
import styles from "./background.module.scss";
import { useEffect, useRef } from "react";

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
    <div className={styles.container}>
      <Avatar
        alt="Ryan Smith"
        src="/headshot.webp"
        sx={{ width: 200, height: 200 }}
        className={styles.avatar}
      />
      <div>
        <h1 className={styles.title}>Ryan Smith</h1>
        <span className={styles.typewriter} ref={typewriterElement}></span>
      </div>
    </div>
  );
}
