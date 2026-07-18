import Link from "next/link";
import Botanical from "./Botanical";
import styles from "./BookBand.module.css";

export default function BookBand() {
  return (
    <section className={styles.band} aria-labelledby="book-heading">
      <Botanical variant="stem" className={styles.stem} />
      <div className={`container`}>
        <div className={styles.inner} data-reveal-item>
          <h2 id="book-heading" className={styles.heading}>
            Begin with a conversation.
          </h2>
          <p className={styles.sub}>
            A first consultation is unhurried: your history, your symptoms, and
            what you hope to change — before any remedy is prescribed. All
            consultations happen online, over secure video, from wherever you
            are.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-on-deep">
              Request an appointment
            </Link>
            <Link href="/about" className="btn btn-ghost-on-deep">
              Meet Dr. Madhavi
            </Link>
          </div>
          <p className={styles.contactLine}>
            Every request is answered with a confirmed time and a private video
            link.
          </p>
        </div>
      </div>
    </section>
  );
}
