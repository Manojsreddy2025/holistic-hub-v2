import type { Metadata } from "next";
import Link from "next/link";
import BookBand from "@/components/BookBand";
import Botanical from "@/components/Botanical";
import styles from "../editorial.module.css";

export const metadata: Metadata = {
  title: "Psychological Treatment",
  description:
    "Psychotherapy and cognitive behaviour therapy for depression, anxiety, childhood difficulties and family distress — from a counselor with 25+ years of practice.",
};

const CONCERNS: Array<{ area: string; list: string }> = [
  {
    area: "Mood",
    list: "Acute and chronic depression, bipolar affective disorder, persistent low mood, and the exhaustion that follows long illness.",
  },
  {
    area: "Anxiety & fear",
    list: "Generalised anxiety, panic, and specific fears — of exams, illness, death, being alone — that have begun to shape daily life.",
  },
  {
    area: "Serious mental illness",
    list: "Schizophrenia and acute psychosis, supported in coordination with psychiatric care and the patient's family.",
  },
  {
    area: "Children & adolescents",
    list: "Poor concentration, reading and writing difficulties, headstrong or quarrelsome behaviour, stealing, homesickness, and school-related fears.",
  },
  {
    area: "Families & relationships",
    list: "Family conflict, marital distress and divorce counseling — the same work the practice does for the Telangana police department's family counseling programs.",
  },
];

export default function PsychologicalTreatment() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className="container">
          <div className={styles.pageHeadInner} data-reveal-item>
            <p className={styles.pageKicker}>the mind</p>
            <h1 className={styles.pageTitle}>Psychological treatment</h1>
            <p className={styles.pageLead}>
              Psychotherapy is talking with a trained professional about what
              you carry — to find insight, healing, and a way forward. Here it
              sits beside medical care, because the mind was never separate
              from the body.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="approach-heading">
        <div className={`container ${styles.split}`}>
          <h2 id="approach-heading" className={styles.splitTitle} data-reveal-item>
            Counseling with a physician&rsquo;s eye
          </h2>
          <div className={styles.prose} data-reveal-item>
            <p>
              Dr. Madhavi practises <em>cognitive behaviour therapy</em> and
              psychotherapy with a medical degree behind them. When your low
              mood has a thyroid behind it, or your child&rsquo;s trouble at
              school has an allergy behind it, the same practice can see — and
              treat — both.
            </p>
            <p>
              Depression is a common and serious illness that changes how you
              feel, think, and act. It is also treatable. Therapy here is
              practical and unhurried: understanding what maintains the
              difficulty, then working on it session by session.
            </p>
            <p>
              Beyond the clinic, the practice counsels for women and child
              protection, runs gender-sensitization programs, and works with
              the Telangana police department on family counseling and divorce
              cases — work that has taught it how much distress families
              carry quietly, and how much of it can be eased.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionTint} aria-labelledby="concerns-heading">
        <div className="container">
          <h2 id="concerns-heading" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", marginBottom: "clamp(28px, 4vw, 44px)" }} data-reveal-item>
            What people bring here
          </h2>
          <dl className={styles.indexList}>
            {CONCERNS.map((c, i) => (
              <div className={styles.indexRow} key={c.area} data-reveal-item style={{ ["--reveal-delay" as string]: `${Math.min(i * 0.05, 0.25)}s` }}>
                <dt>{c.area}</dt>
                <dd>{c.list}</dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 28, fontSize: 16 }} data-reveal-item>
            Sessions are confidential and held online, over secure video.{" "}
            <Link href="/contact">Book a first conversation</Link>.
          </p>
        </div>
      </section>

      <section className={styles.pull} aria-label="A thought on beginning therapy">
        <div className="container" data-reveal-item>
          <Botanical variant="divider" className={styles.pullDivider} />
          <blockquote>
            Happiness is not something ready-made. It comes from your own
            actions.
          </blockquote>
        </div>
      </section>

      <BookBand />
    </>
  );
}
