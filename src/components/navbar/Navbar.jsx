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
          <a href="#" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="#" aria-label="Dribbble">
            <img src="/dribbble.png" alt="Dribbble" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
