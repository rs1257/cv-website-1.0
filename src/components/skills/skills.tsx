"use client";
import Aws from "@/assets/tech/cloud/aws";
import { SKILLS } from "@/config/globals";
import styles from "./skills.module.scss";
import Azure from "@/assets/tech/cloud/azure";
import Google from "@/assets/tech/cloud/google";
import MongoDb from "@/assets/tech/database/mongoDb";
import MySql from "@/assets/tech/database/mySql";
import Git from "@/assets/tech/misc/git";
import Css3 from "@/assets/tech/languages/css3";
import Html5 from "@/assets/tech/languages/html5";
import GraphQL from "@/assets/tech/languages/graphQL";
import Java from "@/assets/tech/languages/java";
import Php from "@/assets/tech/languages/php";
import Python from "@/assets/tech/languages/python";
import Sass from "@/assets/tech/languages/sass";
import Terraform from "@/assets/tech/languages/terraform";
import TypeScript from "@/assets/tech/languages/typescript";
import Docker from "@/assets/tech/misc/docker";
import Electron from "@/assets/tech/misc/electron";
import NextJs from "@/assets/tech/misc/nextjs";
import NodeJs from "@/assets/tech/misc/nodejs";
import React from "@/assets/tech/misc/react";
import Selenium from "@/assets/tech/misc/selenium";
import ViteJs from "@/assets/tech/misc/vitejs";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <h1 id={SKILLS}>Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map(({ icon, title }, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className={styles.iconCard}
            >
              <span>{icon}</span>
              <h2>{title}</h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

const skills = [
  {
    icon: <Aws />,
    title: "AWS",
  },
  {
    icon: <Azure />,
    title: "Azure",
  },
  {
    icon: <Google />,
    title: "GCP",
  },
  {
    icon: <MongoDb />,
    title: "MongoDB",
  },
  {
    icon: <MySql />,
    title: "MySQL",
  },
  {
    icon: <Git />,
    title: "Git",
  },
  {
    icon: <Css3 />,
    title: "CSS",
  },
  {
    icon: <Html5 />,
    title: "HTML",
  },
  {
    icon: <GraphQL />,
    title: "GraphQL",
  },
  {
    icon: <Java />,
    title: "Java",
  },
  {
    icon: <Php />,
    title: "PHP",
  },
  {
    icon: <Python />,
    title: "Python",
  },
  {
    icon: <Sass />,
    title: "Sass",
  },
  {
    icon: <Terraform />,
    title: "Terraform",
  },
  {
    icon: <TypeScript />,
    title: "TypeScript",
  },
  {
    icon: <Docker />,
    title: "Docker",
  },
  {
    icon: <Electron />,
    title: "Electron",
  },
  {
    icon: <NextJs />,
    title: "NextJS",
  },
  {
    icon: <NodeJs />,
    title: "NodeJS",
  },
  {
    icon: <React />,
    title: "React",
  },
  {
    icon: <Selenium />,
    title: "Selenium",
  },
  {
    icon: <ViteJs />,
    title: "ViteJS",
  },
];
