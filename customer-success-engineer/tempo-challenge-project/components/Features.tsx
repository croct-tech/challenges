"use client"

import styles from "./Features.module.css";
import {useContent} from '@croct/plug-next';

export default function Features() {
  const {content} = useContent('features-section', {
    initial: {
      tagline: "Because focus shouldn’t be accidental",
      description: "Tempo turns your calendar into a system for protecting focus, coordinating your team, and making time count.",
      features: [
        {
          icon: "◐",
          title: "Focus time on autopilot",
          description: "Tempo finds the best open windows across your team and automatically blocks focus time every week."
        }
      ]
    },
  });

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{content.tagline}</p>
          <h2>Your calendar, working for you — not against you.</h2>
          <p>{content.description}</p>
        </div>

        <div className={styles.grid}>
          {content.features.map((feature, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
