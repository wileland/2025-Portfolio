// File: /src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameRoute from './pages/GameRoute';
import IntroCrawlPage from './components/IntroCrawlPage/IntroCrawlPage';

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
      <Cursor />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="Homepage">
                <Navbar />
                <Hero />
              </section>

              <IntroCrawlPage />

              <section id="Services">
                <Parallax type="services" />
              </section>

              <section>
                <Services />
              </section>

              <section id="Portfolio">
                <Parallax type="portfolio" />
              </section>

              <Portfolio />

              <section id="Contact">
                <Contact />
              </section>

              {/* Optional: Framer Motion crash course testing */}
              {/* <Test /> */}
            </>
          }
        />

        <Route path="/game" element={<GameRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
