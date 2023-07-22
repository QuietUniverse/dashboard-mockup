import styles from "./FilterButton.module.css";

function FilterButton({ filter, description }) {
  return (
    <li key={filter} className={styles.list}>
      <button type="button" className={styles.layout}>
        <span className={styles.filter}>{filter}:</span>
        <p className={styles.description}>{description}</p>
        <svg className={styles.select}>
          <use href="sprite.svg#arrow" />
        </svg>
      </button>
    </li>
  );
}

export default FilterButton;
