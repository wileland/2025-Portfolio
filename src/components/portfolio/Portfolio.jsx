import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Echo Doj0 — Private-First AI Memory Platform",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A private-first voice memory archive and philosophical pedagogy engine. Record → Reflect → Recognize → Grow. The AI layer does not diagnose. It reflects what it can prove — receipt-grounded, bounded, grounded in the user's own words. Built solo: MERN, GraphQL, BullMQ/Redis, MongoDB Atlas Vector Search, Whisper, Langfuse. 1,500+ pull requests. Every claim traces to a real source.",
    link: "https://ashlight-frontend.onrender.com",
    linkLabel: "Open Live App",
    repo: "https://github.com/wileland/echo-dojo-showcase",
    repoLabel: "View Showcase Repo",
  },
  {
    id: 2,
    title: "Echo Doj0 — Architecture Showcase",
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A public technical case study for Echo Doj0: system design decisions, API structure, memory architecture, and the provenance-first principles behind the private-first design. The engineering proof made legible without exposing the private source.",
    link: "https://github.com/wileland/echo-dojo-showcase",
    linkLabel: "View on GitHub",
    repo: null,
    repoLabel: null,
  },
  {
    id: 3,
    title: "Quizard — Real-Time Quiz Platform",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A real-time multiplayer quiz platform built with Socket.IO, Node/Express, and React. Supports live game rooms, synchronized question delivery, and instant scoring across concurrent players. Demonstrates real-time event architecture, stateful session management, and responsive UI under live conditions.",
    link: "https://github.com/wileland",
    linkLabel: "View on GitHub",
    repo: null,
    repoLabel: null,
  },
  {
    id: 4,
    title: "This Portfolio — Founder Communication Layer",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A Vite/React animated portfolio built to position Echo Doj0 and its builder for founding engineer, full-stack AI, and mission-driven product roles. The site itself is a product-positioning artifact — cinematic shell, real content, no filler. Architecture and copy authored by William L. Haynes.",
    link: "https://github.com/wileland",
    linkLabel: "GitHub Profile",
    repo: null,
    repoLabel: null,
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img
              src={item.img}
              alt={`Project: ${item.title}`}
              loading="lazy"
            />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="projectLinks">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.linkLabel} for ${item.title}`}
                className="project-btn"
              >
                {item.linkLabel}
              </a>
              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.repoLabel} for ${item.title}`}
                  className="project-btn project-btn--secondary"
                >
                  {item.repoLabel}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <header className="progress" aria-label="Project Showcase Progress">
        <h1>Proof of Work</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </header>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
