"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styles from "./timeline.module.scss";
import Chip from "@mui/material/Chip";
import { EXPERIENCE } from "@/config/globals";
import Section from "../section/section";
import { babyBlue, lightBlue } from "@/config/colours";
import { useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { timeline } from "@/config/timeline";

export default function OutlinedTimeline() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Section
      id={EXPERIENCE}
      header="Experience"
      text="My software engineer journey"
    >
      <LazyMotion features={domAnimation} strict>
        <Timeline position="alternate-reverse" className={styles.timeline}>
          {timeline.map(({ name, startDate, endDate, body, tags }, index) => {
            return (
              <TimelineItem key={name}>
                <TimelineSeparator>
                  <TimelineDot
                    variant={selected === index ? "filled" : "outlined"}
                    sx={{
                      borderColor: babyBlue,
                      background: selected === index ? babyBlue : "none",
                      width: "10px",
                      height: "10px",
                    }}
                  />
                  {timeline.length - 1 !== index && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: lightBlue,
                        width: "5px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <m.div
                    whileHover={{ scale: 1.02 }}
                    className={`${styles.card} ${
                      index % 2 === 1 ? styles.left : styles.right
                    }`}
                    onMouseOver={() => setSelected(index)}
                  >
                    <h3>{name}</h3>
                    <span className={styles.dateRange}>
                      {startDate} - {endDate}
                    </span>
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
                    <div>{body}</div>
                  </m.div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </LazyMotion>
    </Section>
  );
}
