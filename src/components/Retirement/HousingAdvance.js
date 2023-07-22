import Link from "../UI/Link";
import styles from "./HousingAdvance.module.css";

function HousingAdvance() {
  return (
    <div className={styles.layout}>
      <p className={styles.question}>Are you considering a</p>
      <span className={styles.highlight}>Housing advance?</span>
      <p className={styles.tagline}>Limited time reduced interest.</p>
      <div className={styles.link}>
        <Link linkText="Learn more" className={styles.smaller} />
      </div>
    </div>
  );
}

export default HousingAdvance;
