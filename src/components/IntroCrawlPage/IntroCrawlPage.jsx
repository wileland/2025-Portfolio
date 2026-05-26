import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./IntroCrawlPage.scss";

const READER_STEP_MS = 8000;

const crawlParagraphs = [
  "I am William L. Haynes — a former educator who spent ten years in San Antonio classrooms before building one of the most architecturally complete solo AI projects I know of: Echo Doj0.",
  "Teaching was not a detour. A decade of ESOL and English instruction sharpened the exact instincts that make a founding engineer dangerous: the ability to break complex systems into legible steps, to document clearly under pressure, to understand what a user actually needs rather than what they say they want.",
  "In 2024 I pivoted hard into full-stack engineering. UTSA bootcamp gave me the foundation. The year that followed gave me the proof. I stopped building toy apps and started building a real product — one with a real architecture problem at its center.",
  "That product is Echo Doj0: a private-first voice memory archive and AI reflection platform. The premise is simple and hard: let people record their own words, store them durably, and receive AI-assisted reflections grounded only in what they actually said.",
  "The architecture is not simple. React and Vite on the frontend. Node and Express on the backend. GraphQL API surface. MongoDB Atlas for durable, provenance-aware memory storage. BullMQ-style async orchestration for the audio and transcription pipeline. Every layer of the stack is present and load-bearing.",
  "Echo Doj0 does not diagnose. It does not invent. It reflects — archive-backed, bounded, grounded in the user’s own language. The AI output carries a receipt. The system earns its claims.",
  "I built this solo. That is the proof. Not a tutorial. Not a team project. A working system with real decisions at every layer — infrastructure, API design, memory architecture, product positioning, and the discipline to ship without cutting the corners that matter.",
  "I am ready for founding engineer, full-stack AI, and product engineering roles. If you need someone who can architect, build, explain, and sustain a complex product — Echo Doj0 is the evidence.",
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
      id="Origin"
      ref={sectionRef}
      className="intro-crawl-section"
      aria-label="Origin Story"
    >
      <div className="scroll-hint-banner" aria-hidden="true">
        <span>Stay for the crawl or scroll on ↓</span>
      </div>

      <h2 className="about-me-title">Origin Story</h2>

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
          Former educator. Founding engineer. Echo Doj0 is the proof.
        </p>

        <p>
          Ten years in the classroom built instincts that transfer directly to
          engineering: systems thinking, clear documentation, and a deep read on
          what users actually need. Echo Doj0 — a private-first voice memory
          archive with a receipt-grounded AI reflection layer — is the proof of
          work. Built solo, full-stack, architecturally complete. Ready for
          founding engineer, full-stack AI, and mission-driven product roles.
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
