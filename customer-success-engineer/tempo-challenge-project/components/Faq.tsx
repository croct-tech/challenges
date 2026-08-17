"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="container">
        <div className={`section-head ${styles.head}`}>
          <p className={`eyebrow ${styles.eyebrow}`}>FAQ</p>
          <h2 className={styles.title}>Questions, answered.</h2>
        </div>

        <div className={styles.faq}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={item.event}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <h3 className={styles.questionWrap}>
                  <button
                    id={buttonId}
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-event={item.event}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {item.question}
                    <span className={styles.plus} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.answer}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
