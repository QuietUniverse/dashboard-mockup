import DoughnutChart from "./DoughnutChart";
import FilterButton from "./FilterButton";

import styles from "./Peers.module.css";

function Peers() {
  return (
    <div className={styles.layout}>
      <h3>How do I compare to my peers?</h3>
      <p className={styles.info}>
        These numbers respresent current goal achievement
      </p>
      <div>
        <ul className={styles.list}>
          <FilterButton filter="Age" description="Under 30" />
          <div className={styles.divider}></div>
          <FilterButton filter="Salary" description="K 20 - K 30" />
          <div className={styles.divider}></div>
          <FilterButton filter="Gender" description="Male" />
        </ul>
      </div>
      <div className={styles.donuts}>
        <div className={styles.donut}>
          <DoughnutChart completionPercentage={78} />
          <p className={styles.percent}>
            78<sup>%</sup>
          </p>
          <p className={styles[`chart-desc`]}>Average</p>
        </div>
        <div className={styles.donut}>
          <DoughnutChart completionPercentage={95} />
          <p className={styles.percent}>
            95<sup>%</sup>
          </p>
          <p className={styles[`chart-desc`]}>Top</p>
        </div>
        <div className={styles.donut}>
          <DoughnutChart completionPercentage={59} />
          <p className={styles.percent}>
            59<sup>%</sup>
          </p>
          <p className={styles[`chart-desc`]}>Me</p>
        </div>
      </div>
    </div>
  );
}

export default Peers;
