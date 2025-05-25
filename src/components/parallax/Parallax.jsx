// src/components/parallax/Parallax.jsx
import { useRef } from "react";
import "./parallax.scss"; // This SCSS will contain styles for this section
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => { // Keep type if you might have other parallax types
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); // Slower scroll for the lone title
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax rocks-section-container" // New class for clarity
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)", // Default background
        // Ensuring this section is also full height for its own display
        height: "100vh",
        width: "100%", // Changed from 100vw for better typical block behavior
        scrollSnapAlign: "center", // If using scroll snapping
      }}
    >
      <motion.h1
        className="catalyst-title-rocks" // Specific class for this H1
        style={{ y: yText }}
      >
        {/* Only render "The Catalyst." for the services type, or always if this component is only for services */}
        {type === "services" ? (
          <span className="catalyst-text-animated">The Catalyst.</span>
        ) : (
          "What We Did?" // Fallback if type is used for other things
        )}
      </motion.h1>

      {/* "About Me" text (Star Wars crawl) is REMOVED from here */}

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;