// File: /src/components/IntroCrawlPage/IntroCrawlPage.jsx

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./IntroCrawlPage.scss";

const CRAWL_DURATION_MS = 65000;
const PARAGRAPH_ADVANCE_MS = 12000;

const crawlParagraphs = [
  "My entire life has been woven together with technology. From CISCO networking in high school to managing university lab systems, from teaching in Title I schools to building MERN apps with AI integration, tech has always been my throughline—and my refuge.",
  "I earned both my Bachelor’s and Master’s degrees in English from Texas A&M International University while working as a Computer Lab Technician for the Office of Information Technology. There, I maintained over 100 systems, used Guardian to oversee lab infrastructure, and handled all AV for major lectures and campus events. That job helped fund my education—and confirmed I belonged in tech.",
  "After graduating, I spent the next decade teaching English and ESOL in underserved communities across Texas. During the pandemic, I led innovative ESOL instruction at Edison High School, later becoming ESL Coordinator and campus LPAC officer. Teaching honed my ability to lead, adapt, and drive growth through data. Every student was a moving data point—and every breakthrough a measurable success.",
  "I’m a catalyst by nature: resilient, uplifting, and always pushing momentum. Whether I’m rallying students, debugging code, or harmonizing a team, I carry positivity, empathy, and purpose. I’m equally driven by creative vision and tangible results. I thrive when I’m achieving, contributing, and building alongside others.",
  "In 2024, I completed UTSA’s Full Stack Web Development Bootcamp—an intensive program centered around the MERN stack. Over six months, I mastered over 60 technologies, simulating agile work environments and collaborating on real-world projects. My capstone, Ashlight, is a voice-first journaling platform powered by AI and built with a REST/GraphQL hybrid backend.",
  "I’m bilingual in English and Spanish, and I hold certifications in AI Prompting and Machine Learning. I’m endlessly curious, exceptionally creative, and deeply comfortable with complexity. Whether it’s front-end finesse, back-end logic, or the emotional intelligence needed to keep a team clicking—I bring it.",
  "I’m not looking to fit in—I’m looking to stand out with purpose. My dream? To lead, build, and one day co-found something transformative. Until then, I’m here: ready to contribute, learn, and uplift.",
  "Who am I? Well, I am...",
];

const IntroCrawlPage = () => {
  const sectionRef = useRef(null);
  const sequenceTimerRef = useRef(null);
  const paragraphIntervalRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    once: false,
  });

  const [revealText, setRevealText] = useState(false);
  const [replayTrigger, setReplayTrigger] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const clearSequence = useCallback(() => {
    if (sequenceTimerRef.current) {
      window.clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }

    if (paragraphIntervalRef.current) {
      window.clearInterval(paragraphIntervalRef.current);
      paragraphIntervalRef.current = null;
    }
  }, []);

  const startSequence = useCallback(() => {
    clearSequence();

    setHasStarted(true);
    setRevealText(false);
    setCurrentIndex(0);

    sequenceTimerRef.current = window.setTimeout(() => {
      setRevealText(true);
    }, CRAWL_DURATION_MS);

    paragraphIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev < crawlParagraphs.length - 1 ? prev + 1 : prev
      );
    }, PARAGRAPH_ADVANCE_MS);
  }, [clearSequence]);

  useEffect(() => {
    if (isInView && !hasStarted) {
      startSequence();
    }
  }, [isInView, hasStarted, startSequence]);

  useEffect(() => {
    return () => {
      clearSequence();
    };
  }, [clearSequence]);

  const handleSkip = () => {
    clearSequence();
    setHasStarted(true);
    setRevealText(true);
    setCurrentIndex(crawlParagraphs.length - 1);
  };

  const handleReplay = () => {
    setReplayTrigger((prev) => prev + 1);
    startSequence();
  };

  return (
    <section
      ref={sectionRef}
      className={`intro-crawl-section ${revealText ? "completed" : ""}`}
      aria-label="Intro Crawl Narrative"
    >
      <div className="scroll-hint-banner" aria-hidden="true">
        <span>Feel free to scroll ↓</span>
      </div>

      <h2 className="about-me-title">About Me</h2>

      <div
        className="crawl-reader-overlay"
        aria-live="polite"
        aria-hidden={revealText}
      >
        <p>{crawlParagraphs[currentIndex]}</p>
      </div>

      <div
        className="scroll-text-window"
        key={replayTrigger}
        aria-hidden={revealText}
      >
        <div className="crawl-fade-overlay" />
        <article className="crawl-text">
          {crawlParagraphs.slice(0, -1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="final-line">{crawlParagraphs.at(-1)}</p>
        </article>
      </div>

      <div
        className={`reflection-overlay ${revealText ? "visible" : ""}`}
        aria-live="polite"
      >
        <p>
          This journey is more than a scroll; it is a transmission. A record of
          how tech, creativity, and resilience converge to tell a story worth
          building on. If you are here, you are already part of it.
        </p>

        <div className="controls">
          {!revealText && (
            <button type="button" onClick={handleSkip}>
              Skip to Summary
            </button>
          )}

          {revealText && (
            <button type="button" onClick={handleReplay}>
              Replay
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroCrawlPage;
