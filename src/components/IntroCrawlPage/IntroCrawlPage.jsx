// File: /src/components/IntroCrawlPage/IntroCrawlPage.jsx

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import "./IntroCrawlPage.scss";

const PARAGRAPH_ADVANCE_MS = 9000;

const crawlParagraphs = [
  "Technology has always been my throughline. From CISCO networking in high school to managing university lab systems, from teaching in Title I schools to building MERN applications with AI integration, tech has long been both my refuge and my direction.",
  "At Texas A&M International University, I earned both my Bachelor’s and Master’s degrees in English while working as a Computer Lab Technician for the Office of Information Technology. I maintained over 100 systems, supported AV for major campus events, and learned early that I was just as comfortable around infrastructure as I was around language.",
  "After graduation, I spent a decade teaching English and ESOL across underserved communities in Texas. That work sharpened my leadership, adaptability, and communication. In the classroom, every student was a living system with inputs, friction, and possibility. Teaching taught me how to guide growth without losing the human thread.",
  "That same instinct now powers the way I build software. I am at my best where structure meets empathy: translating complexity, debugging calmly, and moving ideas from concept to execution with intention.",
  "In 2024, I completed UTSA’s Full Stack Web Development Bootcamp, centered on the MERN stack. Since then, I have built projects ranging from Quizard, a real-time quiz platform with Socket.IO, to AI-forward concepts like Ashlight and Echo Doj0, where voice, memory, and interface begin to blur into something more personal.",
  "I am bilingual in English and Spanish, certified in AI Prompting and Machine Learning, and deeply at home in both creative and technical work. Front end, back end, UX, language, systems, team energy—I move comfortably across the whole field.",
  "I am not trying to disappear into the crowd. I want to build with purpose, contribute with clarity, and help create things that feel alive. I am here to keep learning, keep making, and keep becoming more dangerous in the best possible way.",
  "William L. Haynes.",
];

const IntroCrawlPage = () => {
  const sectionRef = useRef(null);
  const paragraphIntervalRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    once: false,
  });

  const prefersReducedMotion = useReducedMotion();

  const [hasStarted, setHasStarted] = useState(false);
  const [isSequenceRunning, setIsSequenceRunning] = useState(false);
  const [revealText, setRevealText] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sequenceKey, setSequenceKey] = useState(0);

  const clearSequence = useCallback(() => {
    if (paragraphIntervalRef.current) {
      window.clearInterval(paragraphIntervalRef.current);
      paragraphIntervalRef.current = null;
    }
  }, []);

  const finishSequence = useCallback(() => {
    clearSequence();
    setIsSequenceRunning(false);
    setRevealText(true);
    setCurrentIndex(crawlParagraphs.length - 1);
  }, [clearSequence]);

  const startSequence = useCallback(() => {
    clearSequence();

    setHasStarted(true);
    setRevealText(false);
    setIsSequenceRunning(true);
    setCurrentIndex(0);
    setSequenceKey((prev) => prev + 1);

    paragraphIntervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) =>
        prev < crawlParagraphs.length - 1 ? prev + 1 : prev
      );
    }, PARAGRAPH_ADVANCE_MS);
  }, [clearSequence]);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    if (prefersReducedMotion) {
      setHasStarted(true);
      setRevealText(true);
      setCurrentIndex(crawlParagraphs.length - 1);
      return;
    }

    startSequence();
  }, [isInView, hasStarted, prefersReducedMotion, startSequence]);

  useEffect(() => {
    return () => {
      clearSequence();
    };
  }, [clearSequence]);

  const handleSkip = () => {
    finishSequence();
  };

  const handleReplay = () => {
    if (prefersReducedMotion) {
      setHasStarted(true);
      setRevealText(true);
      setCurrentIndex(crawlParagraphs.length - 1);
      return;
    }

    startSequence();
  };

  return (
    <section
      ref={sectionRef}
      className={`intro-crawl-section ${revealText ? "completed" : ""}`}
      aria-label="About Me"
    >
      <div className="scroll-hint-banner" aria-hidden="true">
        <span>Stay for the crawl or scroll on ↓</span>
      </div>

      <h2 className="about-me-title">About Me</h2>

      {isSequenceRunning && (
        <>
          <div className="crawl-reader-overlay" aria-live="polite">
            <p>{crawlParagraphs[currentIndex]}</p>
          </div>

          <div className="scroll-text-window" key={sequenceKey}>
            <div className="crawl-fade-overlay" />
            <article
              className="crawl-text"
              onAnimationEnd={finishSequence}
              aria-label="Animated intro crawl"
            >
              {crawlParagraphs.slice(0, -1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p className="final-line">{crawlParagraphs.at(-1)}</p>
            </article>
          </div>
        </>
      )}

      <div
        className={`reflection-overlay ${revealText ? "visible" : ""}`}
        aria-live="polite"
      >
        <p className="summary-kicker">Former educator. Full-stack builder. AI-forward storyteller.</p>

        <p>
          I bring a rare mix of technical curiosity, communication strength, and
          creative instinct. I have led classrooms, maintained systems, built
          real applications, and learned how to move between people and
          complexity without losing either. That is the value I bring to a team:
          clarity, momentum, empathy, and the will to build something that
          actually matters.
        </p>

        <div className="controls">
          {!revealText && (
            <button type="button" onClick={handleSkip}>
              Skip to Summary
            </button>
          )}

          {revealText && (
            <button type="button" onClick={handleReplay}>
              Replay Crawl
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroCrawlPage;
