import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <p className={styles.statement}>
            Happiness is a journey, not a destination.
          </p>

          <div className={styles.cols}>
            <div>
              <h2 className={styles.colTitle}>Visit</h2>
              <ul className={styles.colList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/physical-treatment">Physical Treatment</Link></li>
                <li><Link href="/psychological-treatment">Psychological Treatment</Link></li>
                <li><Link href="/about">About Dr. Madhavi</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact &amp; booking</Link></li>
              </ul>
            </div>
            <div>
              <h2 className={styles.colTitle}>Consultations</h2>
              <ul className={styles.colList}>
                <li><Link href="/contact">Request an appointment</Link></li>
                <li><a href="mailto:DrMadhavi@holistichealhub.org">DrMadhavi@holistichealhub.org</a></li>
                <li>Online, over secure video — worldwide</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.credentials}>
            Dr. Sammeta Madhavi · Homeopathic Physician &amp;
            Psychotherapy Counselor · Reg. No. A 6966 · BHMS (Homoeopathy),
            MS Psychotherapy, Bio-Informatics
          </p>
          <p>© {new Date().getFullYear()} Holistic Heal Hub</p>
        </div>
      </div>
    </footer>
  );
}
