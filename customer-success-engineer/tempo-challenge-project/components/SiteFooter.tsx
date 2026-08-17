import styles from "./SiteFooter.module.css";

const links = [
  { href: "#product", label: "Product", event: "footer_link_product" },
  { href: "#pricing", label: "Pricing", event: "footer_link_pricing" },
  { href: "#faq", label: "FAQ", event: "footer_link_faq" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true" />
          Tempo
        </a>

        <nav className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} data-event={link.event}>
              {link.label}
            </a>
          ))}
        </nav>

        <span>© {new Date().getFullYear()} Tempo. All rights reserved.</span>
      </div>
    </footer>
  );
}
