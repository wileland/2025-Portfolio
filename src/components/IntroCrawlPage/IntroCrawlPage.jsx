import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./IntroCrawlPage.scss";

const READER_STEP_MS = 8000;

const crawlParagraphs = [
  "I am William L. Haynes — a former English and ESOL educator who transitioned into software engineering with a focus on full-stack development, AI-forward product thinking, and user-centered problem solving.",
  "My path into tech did not begin yesterday. From CISCO networking in high school to managing university lab systems and AV infrastructure at Texas A&M International University, I learned early how to work with systems, troubleshoot calmly, and support people through complexity.",
  "I later spent a decade teaching in Texas public schools. That work sharpened the skills I now bring into engineering: communication, leadership, adaptability, documentation, empathy, and the ability to break difficult problems into clear, teachable steps.",
  "In 2024, I completed UTSA’s Full Stack Web Development Bootcamp, where I built production-style projects across the MERN stack. Since then, I have continued building across React, Node.js, Express, MongoDB, REST APIs, GraphQL, and real-time application patterns.",
  "My work includes projects like Quizard, a real-time quiz platform powered by Socket.IO, as well as AI-native concepts such as Ashlight and Echo Doj0, where voice, memory, journaling, and interface design converge into more human software experiences.",
  "I am bilingual in English and Spanish, comfortable across front end and back end responsibilities, and especially strong where technical execution meets communication, product thinking, and clarity.",
  "I am seeking opportunities where I can contribute as a software engineer, full-stack developer, or AI-adjacent builder — someone who can ship, learn fast, collaborate well, and bring both rigor and imagination to the work.",
  "William L. Haynes.",
];

const IntroCrawlPage = () => {
  const sectionRef = useRef(null);
  const readerIntervalRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    once: false,
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [readerIndex, setReaderIndex] = useState(0);
  const [crawlRunId, setCrawlRunId] = useState(0);

  const clearReaderInterval = useCallback(() => {
    if (readerIntervalRef.current) {
      window.clearInterval(readerIntervalRef.current);
      readerIntervalRef.current = null;
    }
  }, []);

  const finishCrawl = useCallback(() => {
    clearReaderInterval();
    setShowSummary(true);
    setReaderIndex(crawlParagraphs.length - 1);
  }, [clearReaderInterval]);

  const startCrawl = useCallback(() => {
    clearReaderInterval();
    setHasStarted(true);
    setShowSummary(false);
    setReaderIndex(0);
    setCrawlRunId((prev) => prev + 1);

    readerIntervalRef.current = window.setInterval(() => {
      setReaderIndex((prev) =>
        prev < crawlParagraphs.length - 1 ? prev + 1 : prev
      );
    }, READER_STEP_MS);
  }, [clearReaderInterval]);

  useEffect(() => {
    if (isInView && !hasStarted) {
      startCrawl();
    }
  }, [isInView, hasStarted, startCrawl]);

  useEffect(() => {
    return () => {
      clearReaderInterval();
    };
  }, [clearReaderInterval]);

  const handleSkip = () => {
    finishCrawl();
  };

  const handleReplay = () => {
    startCrawl();
  };

  return (
    <section
      ref={sectionRef}
      className="intro-crawl-section"
      aria-label="About Me"
    >
      <div className="scroll-hint-banner" aria-hidden="true">
        <span>Stay for the crawl or scroll on ↓</span>
      </div>

      <h2 className="about-me-title">About Me</h2>

      {!showSummary && (
        <>
          <div className="crawl-reader-overlay" aria-live="polite">
            <p>{crawlParagraphs[readerIndex]}</p>
          </div>

          <div className="scroll-text-window">
            <div className="crawl-fade-overlay" />
            <article
              key={crawlRunId}
              className="crawl-text"
              onAnimationEnd={finishCrawl}
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

      <div className={`reflection-overlay ${showSummary ? "visible" : ""}`}>
        <p className="summary-kicker">
          Former educator. Full-stack builder. AI-forward storyteller.
        </p>

        <p>
          I build software with a rare combination of technical range,
          communication strength, and human-centered thinking. I am looking for
          roles where I can contribute as a software engineer or full-stack
          developer, grow fast, and help ship products that are both useful and
          memorable.
        </p>

        <div className="controls">
          {!showSummary && (
            <button type="button" onClick={handleSkip}>
              Skip to Summary
            </button>
          )}

          {showSummary && (
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
