import styles from "./Goal.module.css";

function Goal({ value, goalText }) {
  return (
    <div className={styles.layout}>
      <span className={styles.value}>{value}</span>
      <p className={styles[`goal-text`]}>{goalText}</p>
      <div className={styles.divider}></div>
    </div>
  );
}

export default Goal;
