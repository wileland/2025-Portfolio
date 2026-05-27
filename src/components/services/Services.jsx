import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const architectureLayers = [
  {
    title: "Archive",
    desc: "Entries are designed around provenance: every AI insight should trace back to the user's exact words. The archive is the load-bearing stone — all other layers serve it. The game serves the archive. Never the reverse.",
  },
  {
    title: "Analysis",
    desc: "Vibe Gravity measures the delta between stated identity and demonstrated behavior — derived from voice, not self-report. Private. Never public. Never a visible score. The math runs silently beneath everything the user sees.",
  },
  {
    title: "Gameplay",
    desc: "Crucible trials. Experience Packs. Receipt-governed XP. Receipt before reward — the PracticeAttempt is witness before anything is granted. Goodhart's Law compliance is architectural, not policy.",
  },
  {
    title: "Companion",
    desc: "ech0 reflects. Never diagnoses. Mirror, not oracle. Runtime guardrails screen every generated response for overclaiming before it reaches the user. The mirror that guesses is a liar.",
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      className="services"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      aria-label="Echo Doj0 Architecture"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Echo Doj0 is a full-stack AI system.
          <br />
          Every layer is load-bearing.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="System architecture diagram" loading="lazy" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Echo</motion.b> Doj0
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Architecture</motion.b>{" "}
            Layers.
          </h1>
          <a
            href="https://github.com/wileland/echo-dojo-showcase"
            target="_blank"
            rel="noreferrer"
            aria-label="View Echo Doj0 architecture showcase on GitHub"
            className="architecture-link-btn"
          >
            SEE THE SHOWCASE
          </a>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        {architectureLayers.map((layer) => (
          <motion.div
            className="box"
            key={layer.title}
            whileHover={{ borderColor: "rgba(255,231,122,0.4)", scale: 1.01 }}
          >
            <h2>{layer.title}</h2>
            <p>{layer.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
