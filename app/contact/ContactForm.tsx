"use client";

import { useState } from "react";
import styles from "./contact.module.css";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const CLINIC_EMAIL = "DrMadhavi@holistichealhub.org";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const concern = String(data.get("concern") ?? "").trim();
    const times = String(data.get("times") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please give an email address for your confirmation.";
    if (!message) next.message = "A sentence or two is enough.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(
      `Online consultation request — ${name}`
    );
    const body = encodeURIComponent(
      `Hello Dr. Madhavi,\n\nMy name is ${name}.\nReply-to email: ${email}\nConcern: ${concern || "General consultation"}\nTimes that suit me: ${times || "Flexible"}\n\n${message}\n\nThank you.`
    );
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <h3>Your request is ready to send</h3>
        <p>
          We opened your email app with the request addressed to the clinic —
          just press send. The clinic replies with a confirmed time and a
          private video link. If nothing opened, email{" "}
          <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a> directly.
        </p>
        <button type="button" className="btn btn-quiet" onClick={() => setSent(false)}>
          Edit my request
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.formTitle}>Request an appointment</h2>
      <p className={styles.formNote}>
        This composes an email to the clinic — nothing is stored on this
        website. You&rsquo;ll receive your confirmation and video link by
        email.
      </p>

      <div className={styles.row}>
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            name="name"
            className={`input ${errors.name ? "error" : ""}`}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && (
            <p className="field-error" id="cf-name-err">{errors.name}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email for your confirmation</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className={`input ${errors.email ? "error" : ""}`}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && (
            <p className="field-error" id="cf-email-err">{errors.email}</p>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className="field">
          <label htmlFor="cf-concern">What is this about?</label>
          <select id="cf-concern" name="concern" className="select" defaultValue="">
            <option value="">General consultation</option>
            <option>Physical treatment (homoeopathy)</option>
            <option>Psychological treatment (counseling)</option>
            <option>Both — I&rsquo;m not sure where to start</option>
            <option>For my child</option>
            <option>Alongside ongoing medical treatment</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-times">Times that suit you</label>
          <input
            id="cf-times"
            name="times"
            className="input"
            placeholder="e.g. weekday evenings"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message">A few words about your concern</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          className={`textarea ${errors.message ? "error" : ""}`}
          placeholder="What's been troubling you, and for how long?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && (
          <p className="field-error" id="cf-message-err">{errors.message}</p>
        )}
      </div>

      <div>
        <button type="submit" className="btn btn-bright">
          Request my appointment
        </button>
      </div>
    </form>
  );
}
