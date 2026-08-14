"use client";

import { useState } from "react";
import { plans } from "@/lib/content";
import styles from "./Pricing.module.css";

type Period = "monthly" | "annual";

const formatPrice = (value: number) =>
  value % 1 === 0 ? `$${value}` : `$${value.toFixed(1)}`;

export default function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section id="pricing">
      <div className={`container ${styles.container}`}>
        <div className={`section-head ${styles.head}`}>
          <p className="eyebrow">Pricing</p>
          <h2>Plans that scale with your team&apos;s focus.</h2>
        </div>

        <div className={styles.toggle} role="group" aria-label="Billing period">
          <button
            className={period === "monthly" ? styles.toggleActive : undefined}
            aria-pressed={period === "monthly"}
            data-event="pricing_toggle_monthly"
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={period === "annual" ? styles.toggleActive : undefined}
            aria-pressed={period === "annual"}
            data-event="pricing_toggle_annual"
            onClick={() => setPeriod("annual")}
          >
            Annual <span className={styles.saveBadge}>Save 20%</span>
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>{formatPrice(plan.price[period])}</p>
              <p className={styles.period}>{plan.period}</p>
              <ul className={styles.list}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`btn btn-block ${
                  plan.cta.variant === "amber" ? "btn-amber" : "btn-outline-light"
                }`}
                href={plan.cta.href}
                data-event={plan.cta.event}
              >
                {plan.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
