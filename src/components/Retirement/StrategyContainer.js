import styles from "./StrategyContainer.module.css";

function StrategyContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default StrategyContainer;
