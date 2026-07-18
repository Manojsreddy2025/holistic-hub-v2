import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import editorial from "../editorial.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Book an online consultation",
  description:
    "Request an appointment with Dr. Sammeta Madhavi. All consultations happen online over secure video — request a time and receive a confirmation with a private video link.",
};

export default function Contact() {
  return (
    <>
      <section className={editorial.pageHead}>
        <div className="container">
          <div className={editorial.pageHeadInner} data-reveal-item>
            <p className={editorial.pageKicker}>the first step</p>
            <h1 className={editorial.pageTitle}>Book an online consultation</h1>
            <p className={editorial.pageLead}>
              Every consultation happens online, over secure video — wherever
              you are. Send a request below and the clinic replies with a
              confirmed time and a private video link.
            </p>
          </div>
        </div>
      </section>

      <section className={editorial.section} aria-label="How booking works">
        <div className={`container ${styles.grid}`}>
          <div className={styles.channels} data-reveal-item>
            <div className={styles.channel}>
              <p className={styles.channelName}>1 — Send your request</p>
              <p>
                Your name, what&rsquo;s troubling you, and the times that suit
                you. A sentence or two is enough — the detail belongs in the
                consultation.
              </p>
            </div>
            <div className={styles.channel}>
              <p className={styles.channelName}>2 — Receive a confirmed time</p>
              <p>
                The clinic replies by email with a confirmed appointment and a
                private video link. Nothing to install — the link opens in
                your browser.
              </p>
            </div>
            <div className={styles.channel}>
              <p className={styles.channelName}>3 — Meet Dr. Madhavi online</p>
              <p>
                The first consultation is long and unhurried. Follow-ups are
                booked the same way, at times that suit you — from anywhere in
                the world.
              </p>
            </div>
            <div className={styles.channel}>
              <p className={styles.channelName}>Prefer email?</p>
              <p>
                Write to the clinic at{" "}
                <a href="mailto:DrMadhavi@holistichealhub.org">
                  DrMadhavi@holistichealhub.org
                </a>
                .
              </p>
            </div>
          </div>

          <div data-reveal-item style={{ ["--reveal-delay" as string]: "0.1s" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
