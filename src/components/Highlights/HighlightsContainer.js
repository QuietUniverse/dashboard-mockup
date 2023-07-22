import styles from "./Highlights.module.css";

function HighlightsContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default HighlightsContainer;
