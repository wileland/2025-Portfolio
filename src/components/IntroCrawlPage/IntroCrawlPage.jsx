// File: /src/components/IntroCrawlPage/IntroCrawlPage.jsx

import { useEffect, useRef, useState } from "react";
import "./introCrawlPage.scss";

const crawlParagraphs = [
  "My entire life has been woven together with technology. From CISCO networking in high school to managing university lab systems, from teaching in Title I schools to building MERN apps with AI integration, tech has always been my throughline—and my refuge.",
  "I earned both my Bachelor’s and Master’s degrees in English from Texas A&M International University while working as a Computer Lab Technician for the Office of Information Technology. There, I maintained over 100 systems, used Guardian to oversee lab infrastructure, and handled all AV for major lectures and campus events. That job helped fund my education—and confirmed I belonged in tech.",
  "After graduating, I spent the next decade teaching English and ESOL in underserved communities across Texas. During the pandemic, I led innovative ESOL instruction at Edison High School, later becoming ESL Coordinator and campus LPAC officer. Teaching honed my ability to lead, adapt, and drive growth through data. Every student was a moving data point—and every breakthrough a measurable success.",
  "I’m a catalyst by nature: resilient, uplifting, and always pushing momentum. Whether I’m rallying students, debugging code, or harmonizing a team, I carry positivity, empathy, and purpose. I’m equally driven by creative vision and tangible results. I thrive when I’m achieving, contributing, and building alongside others.",
  "In 2024, I completed UTSA’s Full Stack Web Development Bootcamp—an intensive program centered around the MERN stack. Over six months, I mastered over 60 technologies, simulating agile work environments and collaborating on real-world projects. My capstone, Ashlight, is a voice-first journaling platform powered by AI and built with a REST/GraphQL hybrid backend.",
  "I’m bilingual in English and Spanish, and I hold certifications in AI Prompting and Machine Learning. I’m endlessly curious, exceptionally creative, and deeply comfortable with complexity. Whether it’s front-end finesse, back-end logic, or the emotional intelligence needed to keep a team clicking—I bring it.",
  "I’m not looking to fit in—I’m looking to stand out with purpose. My dream? To lead, build, and one day co-found something transformative. Until then, I’m here: ready to contribute, learn, and uplift.",
  "Who am I? Well, I am..."
];

const IntroCrawlPage = () => {
  const crawlRef = useRef();
  const [revealText, setRevealText] = useState(false);
  const [replayTrigger, setReplayTrigger] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealText(true);
    }, 65000); // sync with crawl

    const paragraphInterval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < crawlParagraphs.length - 1 ? prev + 1 : prev
      );
    }, 12000); // slowed down from 9000 to 12000 ms

    return () => {
      clearTimeout(timer);
      clearInterval(paragraphInterval);
    };
  }, [replayTrigger]);

  const handleSkip = () => {
    setRevealText(true);
    setCurrentIndex(crawlParagraphs.length - 1);
  };

  const handleReplay = () => {
    setRevealText(false);
    setReplayTrigger((prev) => prev + 1);
    setCurrentIndex(0);
  };

  return (
    <section className="intro-crawl-section" aria-label="Intro Crawl Narrative">
      <div className="scroll-hint-banner">
        <span>Feel free to scroll ↓</span>
      </div>

      <h2 className="about-me-title">About Me</h2>

      <div className="crawl-reader-overlay">
        <p>{crawlParagraphs[currentIndex]}</p>
      </div>

      <div className="scroll-text-window" key={replayTrigger}>
        <div className="crawl-fade-overlay" />
        <article className="crawl-text" ref={crawlRef}>
          {crawlParagraphs.slice(0, -1).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="final-line">{crawlParagraphs.at(-1)}</p>
        </article>
      </div>

      <div className={`reflection-overlay ${revealText ? "visible" : ""}`}>
        <p>
          This journey is more than a scroll—it's a transmission. A record of how tech,
          creativity, and resilience converge to tell a story worth building on. If you're here,
          you're already part of it.
        </p>
        <div className="controls">
          {!revealText && (
            <button onClick={handleSkip}>Skip to Summary</button>
          )}
          {revealText && <button onClick={handleReplay}>Replay</button>}
        </div>
      </div>
    </section>
  );
};

export default IntroCrawlPage;
