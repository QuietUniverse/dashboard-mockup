import Button from "../UI/Button";
import styles from "./Today.module.css";

const isMobileWidth = window.innerWidth <= 700 ? true : false;

function Today() {
  const layout = !isMobileWidth ? (
    <div className={styles.today}>
      <h3>today</h3>

      <div className={`${styles.info} ${styles.big}`}>
        <span>$19,892</span>
        <p>Account balance</p>
      </div>

      <div className={styles.info}>
        <span>$4,000</span>
        <p>Year-to-date contributions</p>
      </div>

      <div className={styles.info}>
        <span>$1,892</span>
        <p>Total interest</p>
      </div>

      <Button className={styles[`select-btn`]}>
        <p>I want to</p>
        <svg height="100%" width="100%">
          <use href="sprite.svg#arrow" />
        </svg>
      </Button>
    </div>
  ) : (
    <div className={styles.today}>
      <h3>today</h3>

      <div className={`${styles.info} ${styles.big}`}>
        <span>$19,892</span>
        <p>Account balance</p>
      </div>

      <div className={styles.responsive}>
        <div className={styles.info}>
          <span>$4,000</span>
          <p>Year-to-date</p>
        </div>

        <div className={styles.info}>
          <span>$1,892</span>
          <p>Total interest</p>
        </div>
      </div>

      <Button className={styles[`select-btn`]}>
        <p>I want to...</p>
        <svg height="100%" width="100%">
          <use href="sprite.svg#arrow" />
        </svg>
      </Button>
    </div>
  );

  return layout;
}

export default Today;
