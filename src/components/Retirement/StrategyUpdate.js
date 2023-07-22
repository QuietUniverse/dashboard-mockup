import Button from "../UI/Button";
import StrategyInput from "./StrategyInput";
import Link from "../UI/Link";

import styles from "./StrategyUpdate.module.css";

function StrategyUpdate() {
  return (
    <>
      <form className={styles.form}>
        <StrategyInput label="Employee contribution" textFormatter="%" />
        <StrategyInput label="Retirement age" />
        <div className={styles.divider}></div>
        <div className={styles.info}>
          <p>Employer contribution</p>
          <span>8.4%</span>
        </div>
        <div className={styles.info}>
          <p>Interest rate</p>
          <span>5%</span>
        </div>

        <Button className={styles.btn}>Update</Button>

        <div className={styles.docs}>
          <Link linkText="View help docs" />
        </div>
      </form>
    </>
  );
}

export default StrategyUpdate;
