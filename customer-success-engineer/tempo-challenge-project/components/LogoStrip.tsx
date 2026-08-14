import { logoStrip } from "@/lib/content";
import styles from "./LogoStrip.module.css";

export default function LogoStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Trusted by focused teams at</span>
        <div className={styles.row}>
          {logoStrip.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
