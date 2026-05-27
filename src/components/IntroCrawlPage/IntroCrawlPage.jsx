import "./IntroCrawlPage.scss";

const IntroCrawlPage = () => {
  return (
    <section
      id="Origin"
      className="intro-crawl-section"
      aria-label="Origin Story"
    >
      <div className="origin-content">
        <header>
          <p className="origin-kicker">Origin Story</p>
          <h2 className="origin-title">From classroom systems to full-stack AI.</h2>
          <p className="origin-lead">
            I spent a decade teaching people to read critically and write with precision.
            Those instincts did not stop being useful when I started building software.
            Echo Doj0 is what happens when a novelist&apos;s ear and an engineer&apos;s rigor
            work on the same problem.
          </p>
        </header>

        <div className="origin-card-grid">
          <article className="origin-card">
            <h3>Teacher&apos;s Eye</h3>
            <p>
              A decade in ESOL and English classrooms trained me to diagnose confusion
              quickly, translate complexity into legible steps, and design systems that meet
              users where they actually are — not where we wish they were.
            </p>
          </article>
          <article className="origin-card">
            <h3>Builder&apos;s Proof</h3>
            <p>
              Echo Doj0 is the proof artifact: 1,500+ pull requests, solo, no funding.
              The app gives users back their own words, weighted by what they actually mean.
              Same rigor as enterprise agentic RAG. Higher intimacy. More human stakes.
            </p>
          </article>
          <article className="origin-card">
            <h3>Architecture That Earns It</h3>
            <p>
              MERN + GraphQL + BullMQ + MongoDB Atlas Vector Search + Whisper + Langfuse.
              Every layer is load-bearing. The hallucination firewall has never been lowered.
              The quality bar stayed high because regressions were treated as product
              problems, not chores. Rigor under pressure is a feature, not a habit.
            </p>
          </article>
          <article className="origin-card">
            <h3>Founding Engineer Signal</h3>
            <p>
              As AI drives execution costs toward zero, demand shifts to higher-order skills:
              emotional intelligence, trust, high-context judgment. Echo Doj0 is the training
              infrastructure for those skills. I am looking for founding engineer roles where
              product soul and engineering rigor have to coexist.
            </p>
          </article>
        </div>

        <p className="origin-proof-line">
          Echo Doj0 is not a tutorial project. It is the artifact built to prove a full
          product loop can be carried from idea to architecture to shipped experience —
          solo, principled, documented.
        </p>
      </div>
    </section>
  );
};

export default IntroCrawlPage;
