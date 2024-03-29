import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "KONE Internship",
    location: "Surabaya, Indonesia",
    description:
      "I developed a business mobile app needed by the company using Microsoft PowerApps.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Bring the Happiness - AIESEC",
    location: "Surabaya, Indonesia",
    description:
      "I taught orphanages some English.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "U-International Program ",
    location: "Surabaya, Indonesia",
    description:
      "UTM and ITS collaborated to held this event where we can enhance leadership by doing volunteering in the form of teaching kids English and cleaning up the mangrove area as well as conducting 2 leadership forums for us to discuss other campuses in Surabaya about leadership together with Malaysian students.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Apple Developer Academy Foundation Program",
    location: "Surabaya, Indonesia",
    description:
      "I developed a personal financial management iOS app.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "ITS Astronomy Club - Medfo Staff",
    location: "Surabaya, Indonesia",
    description:
      "I created contents for the official Instagram account of IAC using Adobe Illustrator.",
    icon: React.createElement(FaReact),
    date: "2023",
  {
    title: "ITS Archery - External Staff",
    location: "Surabaya, Indonesia",
    description:
      "I created contents for the official Instagram account of Archery using Adobe Illustrator as well as updating live reports.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Schematics 2023 - National Programming Contest (NPC) Staff",
    location: "Surabaya, Indonesia",
    description:
      "One of the problem setters.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "NeuTrack",
    description:
      "I worked as the Raspberry Pi programmer, web and mobile app developer. NeuTrack is an integrated system in the form of a wearable product used to help visually impaired and Alzheimer's to live their life more independently and safely.",
    tags: ["Raspberry Pi", "Python", "Google API", "Flask", "HTML", "CSS", "Flutter", "Gemini AI",],
    imageUrl: corpcommentImg,
  },
  {
    title: "ToolBeng",
    description:
      "I had the role as a front end developer in the team.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Playourette",
    description:
      "Playourette is an iOS personal financial management app made to help users especially teenagers to maintain their financial situation more independently based on 50/30/20 rule.",
    tags: ["Swift", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
] as const;
