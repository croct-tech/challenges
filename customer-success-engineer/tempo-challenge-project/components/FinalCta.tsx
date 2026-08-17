"use client";

import { useState, type FormEvent } from "react";
import styles from "./FinalCta.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FinalCta() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setMessage("Please enter a valid work email.");
      return;
    }

    // TODO: trocar pelo POST real (route handler / server action).
    setMessage(`You're in — check ${value} for next steps.`);
    setEmail("");
  };

  return (
    <section className={styles.band} id="signup">
      <div className="container">
        <h2 className={styles.title}>Get your first focus block this week.</h2>
        <p className={styles.sub}>Free for teams up to 5. No credit card required.</p>

        <form
          className={styles.form}
          onSubmit={onSubmit}
          data-event="signup_form_submit"
          noValidate
        >
          <input
            type="email"
            id="signup-email"
            name="email"
            placeholder="you@company.com"
            aria-label="Work email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-amber"
            data-event="signup_form_cta_click"
          >
            Start free
          </button>
        </form>

        <p className={styles.msg} role="status">
          {message}
        </p>
      </div>
    </section>
  );
}
