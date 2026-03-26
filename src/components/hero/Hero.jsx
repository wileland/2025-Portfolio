import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Moved this to the top of the container so it renders as the background layer */}
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Engineer · AI Builder · Storybuilder
      </motion.div>

      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>William L. Haynes</motion.h2>
          <motion.h1 variants={textVariants}>
            MERN Stack Developer | AI Explorer | Storybuilder
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            {/* Swapped a and button tags: a tags must wrap buttons for valid HTML and clickability */}
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="Scroll Indicator"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Hero illustration" />
      </div>
    </div>
  );
};

export default Hero;
