import { useState } from "react";

import RangeInput from "../UI/RangeInput";

import styles from "./StrategyInput.module.css";

function StrategyInput({ label = "", textFormatter = "" }) {
  const [value, setValue] = useState(50);
  const id = crypto.randomUUID();

  return (
    <div className={styles.layout}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.input}>
        <div className={styles.range}>
          <RangeInput
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={styles.display}>
          <span>{`${value}${textFormatter}`}</span>
        </div>
      </div>
    </div>
  );
}

export default StrategyInput;
