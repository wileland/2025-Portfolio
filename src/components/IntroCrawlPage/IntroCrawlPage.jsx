// src/components/IntroCrawlPage/IntroCrawlPage.jsx
import React from 'react';
import './introCrawlPage.scss';

const IntroCrawlPage = () => {
  return (
    <section className="intro-crawl-section">
      {/* This div is the visible "window" for the scroll */}
      <div className="scroll-text-window">
        <div className="crawl-fade-overlay"></div> {/* Overlay now relative to the window */}
        <div className="crawl-text">
          <p>
            My entire life has been woven together with technology. From CISCO networking in high school to managing university lab systems, from teaching in Title I schools to building MERN apps with AI integration, tech has always been my throughline—and my refuge.
          </p>
          <p>
            I earned both my Bachelor’s and Master’s degrees in English from Texas A&M International University while working as a Computer Lab Technician for the Office of Information Technology. There, I maintained over 100 systems, used Guardian to oversee lab infrastructure, and handled all AV for major lectures and campus events. That job helped fund my education—and confirmed I belonged in tech.
          </p>
          <p>
            After graduating, I spent the next decade teaching English and ESOL in underserved communities across Texas. During the pandemic, I led innovative ESOL instruction at Edison High School, later becoming ESL Coordinator and campus LPAC officer. Teaching honed my ability to lead, adapt, and drive growth through data. Every student was a moving data point—and every breakthrough a measurable success.
          </p>
          <p>
            I’m a catalyst by nature: resilient, uplifting, and always pushing momentum. Whether I’m rallying students, debugging code, or harmonizing a team, I carry positivity, empathy, and purpose. I’m equally driven by creative vision and tangible results. I thrive when I’m achieving, contributing, and building alongside others.
          </p>
          <p>
            In 2024, I completed UTSA’s Full Stack Web Development Bootcamp—an intensive program centered around the MERN stack. Over six months, I mastered over 60 technologies, simulating agile work environments and collaborating on real-world projects. My capstone, Ashlight, is a voice-first journaling platform powered by AI and built with a REST/GraphQL hybrid backend.
          </p>
          <p>
            I’m bilingual in English and Spanish, and I hold certifications in AI Prompting and Machine Learning. I’m endlessly curious, exceptionally creative, and deeply comfortable with complexity. Whether it’s front-end finesse, back-end logic, or the emotional intelligence needed to keep a team clicking—I bring it.
          </p>
          <p>
            I’m not looking to fit in—I’m looking to stand out with purpose. My dream? To lead, build, and one day co-found something transformative. Until then, I’m here: ready to contribute, learn, and uplift.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroCrawlPage;