import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          William L. Haynes
        </motion.span>

        <nav className="social" aria-label="Social Links">
          <a 
            href="https://www.linkedin.com/in/williamhaynesxp/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/wileland" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
