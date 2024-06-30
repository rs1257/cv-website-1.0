"use client";
import { GITHUB, PROJECTS } from "@/config/globals";
import styles from "./projects.module.scss";
import Section from "../section/section";
import { Chip } from "@mui/material";
import { babyBlue } from "@/config/colours";
import Image from "next/image";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <Section
      id={PROJECTS}
      header="Projects"
      text="Things I've developed in my own time"
    >
      <LazyMotion features={domAnimation} strict>
        <div className={styles.container}>
          {projects.map(({ name, tags, image, alt }) => {
            return (
              <m.div
                whileHover={{ scale: 1.05 }}
                className={styles.card}
                key={name}
              >
                <h3>{name}</h3>
                <div className={styles.tags}>
                  {tags.map((tag) => {
                    return (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        color="info"
                        sx={{ background: babyBlue }}
                        className={styles.chip}
                      />
                    );
                  })}
                </div>
                <div className={styles.imageContainer}>
                  <Image src={image} alt={alt} height={200} width={300} />
                </div>
              </m.div>
            );
          })}
        </div>
        <m.a
          whileHover={{ scale: 1.2 }}
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreProjects}
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span>Visit Github for more projects</span>
        </m.a>
      </LazyMotion>
    </Section>
  );
}

const projects = [
  {
    name: "Particle simulation",
    image: "/simulation.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/particle-simulation",
  },
  {
    name: "Snake game",
    image: "/snake-game.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/snake-game",
  },
  {
    name: "Pong game",
    image: "/pong-game.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/pong-game",
  },
  {
    name: "Meta-heuristics networks-on-chip task mapping",
    image: "/task-allocation.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/metaheuristics-noc-task-mapping",
  },
  {
    name: "Monster Hunter World Database",
    image: "/mh-world.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/mhw-database",
  },
  {
    name: "Arbitrage warrior",
    image: "/arbitrage-warrior.png",
    alt: "",
    description: "",
    tags: ["Python"],
    url: "https://github.com/rs1257/arbitrage-warrior",
  },
];
