import type { Metadata } from "next";
import BookBand from "@/components/BookBand";
import styles from "../editorial.module.css";

export const metadata: Metadata = {
  title: "Notes from the practice",
  description:
    "Short essays from Holistic Heal Hub on homoeopathy, psychotherapy, and treating the whole person.",
};

export default function Blog() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className="container">
          <div className={styles.pageHeadInner} data-reveal-item>
            <p className={styles.pageKicker}>the journal</p>
            <h1 className={styles.pageTitle}>Notes from the practice</h1>
            <p className={styles.pageLead}>
              Short essays written between consultations — on what
              twenty-five years of treating bodies and minds together keeps
              teaching.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Journal entries">
        <div className="container">
          <article className={styles.entry} data-reveal-item>
            <p className={styles.entryMeta}>On whole-person medicine</p>
            <div className={styles.entryBody}>
              <h2>The symptom is the messenger, not the message</h2>
              <p>
                A patient arrives with eczema. The cream has stopped working;
                the specialist has shrugged. Twenty minutes into the
                consultation, we reach the real subject: the sleepless months
                since a parent&rsquo;s death. The skin was never the illness —
                it was the body&rsquo;s way of saying what the patient could
                not.
              </p>
              <p>
                This is why a first consultation here is long. Homoeopathy
                chooses its remedy for the whole constitution, and you cannot
                know a constitution from a rash. When the grief is treated —
                sometimes with counseling, sometimes with a remedy, usually
                with both — the skin follows.
              </p>
            </div>
          </article>

          <article className={styles.entry} data-reveal-item>
            <p className={styles.entryMeta}>On working with oncology</p>
            <div className={styles.entryBody}>
              <h2>Alongside, never instead</h2>
              <p>
                The question patients ask most carefully: &ldquo;Can I take
                this with my chemotherapy?&rdquo; The answer, in this practice,
                is that homoeopathy runs <strong>alongside</strong> conventional
                treatment — never instead of it. Our 2024 collaboration with
                Cochies Oncology Centre in the USA is built on exactly that
                principle: the oncologist treats the cancer; we help the
                patient bear the treatment.
              </p>
              <p>
                Nausea, exhaustion, anxiety before each cycle — these respond
                well to gentle, individualised support. Complementary means
                what it says: completing the care, not competing with it.
              </p>
            </div>
          </article>

          <article className={styles.entry} data-reveal-item>
            <p className={styles.entryMeta}>On children</p>
            <div className={styles.entryBody}>
              <h2>The difficult child is usually a worried one</h2>
              <p>
                Parents bring a child who is &ldquo;headstrong&rdquo;, who
                fights at school, whose marks are falling. Ask the child what
                they are afraid of, and the list is long: exams, the dark,
                being left alone. The behaviour is armour.
              </p>
              <p>
                Counseling a child means winning their trust before their
                cooperation — and counseling the family means helping parents
                see the worry beneath the defiance. Most &ldquo;difficult&rdquo;
                children I have met were simply children with no one to tell.
              </p>
            </div>
          </article>
        </div>
      </section>

      <BookBand />
    </>
  );
}
