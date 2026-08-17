"use client"

import FocusWidget from "./FocusWidget";
import styles from "./Hero.module.css";
import {useContent} from '@croct/plug-next';
import {useCroct} from '@croct/plug-next';

export default function Hero() {
  const {content} = useContent('home-hero', {
    initial: {
      tagline: "Time-blocking for focused teams",
      title: "Turn empty calendars into deep work.",
      description: "Tempo scans your team's week, finds the gaps between meetings, and quietly blocks off real focus time — before it gets booked over.",
      primaryCta: {
        label: "Start free trial",
        url: "#"
      },
      secondaryCta: {
        label: "Watch 2-min demo",
        url: "#"
      },
      details: "No credit card · Free for teams up to 5"
    }
  });

  const croct = useCroct();

  function onGoal() {
    croct.track('goalCompleted', {
      goalId: "hero-cta-click",
      currency: "USD",
      value: 50
    });
  }

  return (
    <section className={styles.hero} id="product">
      <div className={`container ${styles.grid}`}>
        <div>
          {content.tagline && (
            <p className="eyebrow">{content.tagline}</p>
          )}
          <h1 className={styles.title}>{content.title}</h1>
          {content.description && (
            <p className={styles.lede}>{content.description}</p>
          )}
          
          <div className={styles.actions}>
            <a
              className="btn btn-amber"
              href={content.primaryCta.url}
              data-event="hero_cta_start_trial"
              onClick={onGoal}
            >
              {content.primaryCta.label}
            </a>
            {content.secondaryCta && (
              <a
                className="btn btn-outline-dark"
                data-event="hero_cta_watch_demo"
                href={content.secondaryCta.url}
              >
                {content.secondaryCta.label}
              </a>
            )}
          </div>
          {content.details && (
            <p className={styles.note}>{content.details}</p>
          )}
        </div>

        <div>
          <FocusWidget />
        </div>
      </div>
    </section>
  );
}
