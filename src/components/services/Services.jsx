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
    title: "Voice Archive",
    desc: "Users record in their own voice. Audio is captured, transcribed, and stored as a durable source artifact — replayable, searchable, never paraphrased away. The recording is the receipt.",
  },
  {
    title: "Memory & Retrieval",
    desc: "Every entry lives in MongoDB Atlas with provenance-aware metadata. Archive search surfaces exact past entries. The system knows what was said, when, and in what context — no hallucinated recall.",
  },
  {
    title: "Reflection Engine",
    desc: "AI-assisted summaries and reflections are generated strictly from the user's own archived language. Bounded claims only. No diagnosis. No invention. The model reflects; the user decides what it means.",
  },
  {
    title: "Practice Layer",
    desc: "Crucible trials and emotional intelligence training loops built on top of the archive. Record → reflect → recognize → grow. The system turns memory into a structured, repeatable practice — not a passive journal.",
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
            whileHover={{ background: "lightgray", color: "black" }}
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
