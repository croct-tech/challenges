"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const goTo = (i: number) => setCurrent((i + total) % total);

  return (
    <section>
      <div className="container">
        <div className={styles.wrap}>
          <div aria-live="polite">
            {testimonials.map((item, i) => (
              <blockquote
                key={item.person}
                className={`${styles.slide} ${i === current ? styles.active : ""}`}
              >
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <footer className={styles.person}>{item.person}</footer>
              </blockquote>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              className={styles.arrow}
              aria-label="Previous"
              data-event="testimonial_prev_click"
              onClick={() => goTo(current - 1)}
            >
              ‹
            </button>

            <div className={styles.dots}>
              {testimonials.map((item, i) => (
                <button
                  key={item.person}
                  className={i === current ? styles.dotActive : undefined}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current}
                  data-event="testimonial_dot_click"
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              className={styles.arrow}
              aria-label="Next"
              data-event="testimonial_next_click"
              onClick={() => goTo(current + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
