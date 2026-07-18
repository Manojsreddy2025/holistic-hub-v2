import type { Metadata } from "next";
import BookBand from "@/components/BookBand";
import Botanical from "@/components/Botanical";
import styles from "../editorial.module.css";

export const metadata: Metadata = {
  title: "About Dr. Madhavi",
  description:
    "Dr. Sammeta Madhavi — Homeopathic Physician & Psychotherapy Counselor, Reg. No. A 6966. 25+ years of practice, BHMS + MS Psychotherapy, ATA Woman Achiever's Award 2021.",
};

const MILESTONES: Array<{ when: string; what: string }> = [
  {
    when: "2024",
    what: "Began a collaboration with Cochies Oncology Centre, USA (with Dr. Nettleton), prescribing homoeopathy alongside radiation and chemotherapy to ease their side effects.",
  },
  {
    when: "2021",
    what: "Received the Woman Achiever's Award from the American Telugu Association (USA) on March 8th — International Women's Day.",
  },
  {
    when: "2012",
    what: "Television appearances and health columns in The Hindu and regional-language newspapers.",
  },
  {
    when: "Ongoing",
    what: "Judge, guest speaker and motivational speaker at international, CBSE and state schools; counseling and sensitization programs with the Telangana police department.",
  },
];

const COMPETENCIES = [
  "Classical homoeopathy",
  "Psychotherapy",
  "Cognitive behaviour therapy",
  "Palliative care",
  "Patient advocacy",
  "Wellness counseling",
];

export default function About() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className="container">
          <div className={styles.pageHeadInner} data-reveal-item>
            <p className={styles.pageKicker}>the physician</p>
            <h1 className={styles.pageTitle}>
              Dr. Sammeta Madhavi
            </h1>
            <p className={styles.pageLead}>
              Homeopathic Physician &amp; Psychotherapy Counselor · Reg. No.
              A 6966 · BHMS (Homoeopathy), MS Psychotherapy &amp;
              Bio-Informatics · twenty-five years in practice.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="story-heading">
        <div className={`container ${styles.split}`}>
          <h2 id="story-heading" className={styles.splitTitle} data-reveal-item>
            Two degrees, one conviction
          </h2>
          <div className={styles.prose} data-reveal-item>
            <p>
              Dr. Madhavi trained first as a homoeopathic physician — BHMS,
              graduating with a 90% academic record. In practice she kept
              meeting patients whose illnesses would not resolve until their
              lives were also heard. So she returned to study, completing an
              MS in psychotherapy (again at 90%) with further work in
              bio-informatics.
            </p>
            <p>
              The result is a practice built on one conviction:{" "}
              <em>the body and the mind are one patient</em>. A consultation
              here can move from a skin complaint to a sleepless month to a
              difficult marriage without changing rooms — and the treatment
              can answer all three.
            </p>
            <p>
              Her work now reaches beyond the clinic: counseling for women and
              child protection, gender-sensitization programs, family
              counseling with the Telangana police department, and speaking
              engagements at schools across the state and abroad.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionTint} aria-labelledby="milestones-heading">
        <div className="container">
          <h2 id="milestones-heading" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", marginBottom: "clamp(28px, 4vw, 44px)" }} data-reveal-item>
            Milestones
          </h2>
          <dl className={styles.indexList}>
            {MILESTONES.map((m, i) => (
              <div className={styles.indexRow} key={m.when + i} data-reveal-item style={{ ["--reveal-delay" as string]: `${Math.min(i * 0.05, 0.25)}s` }}>
                <dt>{m.when}</dt>
                <dd>{m.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.sectionCard} aria-labelledby="competencies-heading">
        <div className={`container ${styles.split}`}>
          <h2 id="competencies-heading" className={styles.splitTitle} data-reveal-item>
            Core competencies
          </h2>
          <div className={styles.prose} data-reveal-item>
            <p>
              {COMPETENCIES.join(" · ")}
            </p>
            <p>
              All consultations are held online, over secure video — patients
              join from across India and abroad, including families overseas
              seeking a physician who understands both their medicine and
              their language.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.pull} aria-label="The practice's conviction">
        <div className="container" data-reveal-item>
          <Botanical variant="divider" className={styles.pullDivider} />
          <blockquote>The body and the mind are one patient.</blockquote>
        </div>
      </section>

      <BookBand />
    </>
  );
}
