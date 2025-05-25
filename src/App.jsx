import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameRoute from './pages/GameRoute'; // Make sure this path is correct
import IntroCrawlPage from './components/IntroCrawlPage/IntroCrawlPage'; // Added import - adjust path if needed

import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <Router>
      <Cursor /> {/* Cursor can be here if it's global and doesn't interfere with routing */}
      <Routes>
        <Route
          path="/"
          element={
            <> {/* Using a fragment to group existing sections for the root path */}
              <section id="Homepage">
                <Navbar />
                <Hero />
              </section>

              {/* Add the IntroCrawlPage component here */}
              <IntroCrawlPage />

              <section id="Services">
                {/* This Parallax will now primarily show "The Catalyst." with rocks */}
                <Parallax type="services" />
              </section>
              <section>
                <Services />
              </section>
              <section id="Portfolio">
                <Parallax type="portfolio" />
              </section>
              <Portfolio /> {/* Assuming this is a component and not a section tag based on naming */}
              <section id="Contact">
                <Contact />
              </section>
              {/* Framer Motion Crash Course */}
              {/* <Test/>
              <Test/> */}
            </>
          }
        />
        <Route path="/game" element={<GameRoute />} />
        {/* You can add other routes here later */}
      </Routes>
    </Router>
  );
};

export default App;