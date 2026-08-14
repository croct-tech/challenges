export type Testimonial = { quote: string; person: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "We went from 11 meetings a day to actually shipping things again. Tempo just quietly held the line.",
    person: "— Mara Lindqvist, Head of Product at Northwind",
  },
  {
    quote:
      "The team focus insights are the first calendar data that's ever changed how we plan sprints.",
    person: "— Dan Osei, Engineering Lead at Fieldcraft",
  },
  {
    quote:
      "Setup took four minutes. My focus time has been protected for four months straight.",
    person: "— Priya Nataraj, Designer at Loop Labs",
  },
];

export type Plan = {
  name: string;
  price: { monthly: number; annual: number };
  period: string;
  features: string[];
  cta: { label: string; href: string; variant: "amber" | "outline"; event: string };
  featured?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    period: "forever, up to 5 people",
    features: ["Auto-scheduling", "1 calendar connection", "Weekly focus summary"],
    cta: {
      label: "Start free",
      href: "#signup",
      variant: "outline",
      event: "pricing_cta_starter",
    },
  },
  {
    name: "Team",
    price: { monthly: 12, annual: 9.6 },
    period: "per person / month",
    features: [
      "Everything in Starter",
      "Unlimited calendar connections",
      "Meeting-free windows",
      "Team focus insights",
    ],
    cta: {
      label: "Start free trial",
      href: "#signup",
      variant: "amber",
      event: "pricing_cta_team",
    },
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Business",
    price: { monthly: 22, annual: 17.6 },
    period: "per person / month",
    features: ["Everything in Team", "SSO & admin controls", "Priority support"],
    cta: {
      label: "Talk to sales",
      href: "#signup",
      variant: "outline",
      event: "pricing_cta_business",
    },
  },
];

export type FaqItem = { event: string; question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    event: "faq_toggle_calendars",
    question: "Which calendars does Tempo support?",
    answer:
      "Tempo connects to Google Calendar and Microsoft Outlook today, with two-way sync so focus blocks show up exactly like any other event.",
  },
  {
    event: "faq_toggle_reschedule",
    question: "What happens if someone books over a focus block?",
    answer:
      "Tempo notices the conflict and automatically offers the organizer the nearest open slot instead, so your focus time rarely gets touched.",
  },
  {
    event: "faq_toggle_teamsize",
    question: "Is there a limit on team size?",
    answer:
      "Starter supports up to 5 people. Team and Business scale to any team size, with per-person billing.",
  },
  {
    event: "faq_toggle_cancel",
    question: "Can I cancel anytime?",
    answer:
      "Yes. There's no lock-in on any plan, and you can downgrade to Starter at any time from your account settings.",
  },
  {
    event: "faq_toggle_security",
    question: "How does Tempo handle calendar data?",
    answer:
      "Tempo only reads free/busy status by default. It never reads meeting titles or guest lists unless you explicitly enable that.",
  },
];

export const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const logoStrip = ["Northwind", "Fieldcraft", "Loop\u00a0Labs", "Vantage", "Marrow"];
