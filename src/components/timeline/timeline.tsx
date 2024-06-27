import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import styles from "./timeline.module.scss";
import Chip from "@mui/material/Chip";
import { EXPERIENCE } from "@/app/globals";

export default function OutlinedTimeline() {
  const data = [
    {
      startDate: "Feb 2014",
      endDate: "July 2019",
      name: "Student - University of York",
      body: "MEng Computer Science with a year in industry (1st)",
    },
    {
      startDate: "July 2016",
      endDate: "July 2017",
      name: "Software Engineer Intern - Sophos",
      body: "",
    },
    {
      startDate: "July 2018",
      endDate: "August 2018",
      name: "Cyber Security Intern - University of York",
      body: "",
    },
    {
      startDate: "August 2019",
      endDate: "May 2022",
      name: "Software Engineer - BJSS",
      body: "regeergrehg wge  wrhgrh wrg ",
    },
    {
      startDate: "May 2022",
      endDate: "Dec 2023",
      name: "Senior Consultant - Capgemini Invent",
      body: "",
    },
    {
      startDate: "Jan 2024",
      endDate: "Present",
      name: "Managing Consultant - Capgemini Invent",
      body: "",
    },
  ];

  return (
    <>
      <h1 id={EXPERIENCE}>Experience</h1>
      <Timeline position="alternate-reverse" className={styles.timeline}>
        {data.map(({ name, startDate, endDate, body }, index) => {
          return (
            <TimelineItem key={name}>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{ borderColor: "purple" }}
                />
                {data.length - 1 !== index && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className={`${styles.card} ${
                    index % 2 === 1 ? styles.left : styles.right
                  }`}
                >
                  <h3>{name}</h3>
                  <span className={styles.dateRange}>
                    {startDate} - {endDate}
                  </span>
                  <div>
                    <Chip
                      label="Small"
                      size="small"
                      color="info"
                      sx={{ background: "red" }}
                    />
                  </div>
                  <div>{body}</div>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
