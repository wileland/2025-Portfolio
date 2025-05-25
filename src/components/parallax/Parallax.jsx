import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax rocks-section-container"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)",
        height: "100vh",
        width: "100%",
        scrollSnapAlign: "center",
      }}
    >
      <motion.h1
        className="catalyst-title-rocks"
        style={{ y: yText }}
      >
        {type === "services" ? (
          <span className="catalyst-text-animated">The Catalyst.</span>
        ) : (
          "What We Did?"
        )}
      </motion.h1>

      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
        }}
      />
      <motion.div className="stars" style={{ x: yBg }} />
    </div>
  );
};

export default Parallax;
