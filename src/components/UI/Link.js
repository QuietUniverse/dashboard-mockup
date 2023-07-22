import styles from "./Link.module.css";

function Link({ linkText, className = "" }) {
  return (
    <a href={"/#"} className={`${styles.text} ${className}`}>
      {linkText}
      <svg height="100%" width="100%" className={styles.svg}>
        <use href="sprite.svg#chevron" />
      </svg>
    </a>
  );
}

export default Link;
