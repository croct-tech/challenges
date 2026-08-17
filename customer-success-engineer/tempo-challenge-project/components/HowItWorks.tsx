"use client"

import styles from "./HowItWorks.module.css";
import {useContent} from '@croct/plug-next';

export default function HowItWorks() {
  const {content} = useContent('how-it-works-section', {
    initial: {
      tagline: "Getting started",
      heading: "Set up once. Protected every week after",
      steps: [
        {
          stepNumber: 1,
          title: "Connect your calendar",
          description: "Link Google Calendar or Outlook in under a minute. Tempo reads your week, nothing else."
        }
      ]
    },
    preferredLocale: "pt-br"
  });

  return (
    <section className={styles.how} id="how">
      <div className="container">
        <div className={`section-head ${styles.head}`}>
          {content.tagline && (
            <p className="eyebrow">{content.tagline}</p>
          )}
          <h2>{content.heading}</h2>
        </div>

        <ol className={styles.steps}>
          {content.steps.map((step, index) => (
            <li key={index} className={styles.step}>
              <span className={styles.num}>{step.stepNumber}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
