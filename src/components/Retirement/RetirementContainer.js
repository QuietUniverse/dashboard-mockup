import styles from "./RetirementContainer.module.css";

function RetirementContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default RetirementContainer;
