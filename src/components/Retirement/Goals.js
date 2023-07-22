import Goal from "./Goal";
import styles from "./Goals.module.css";

function Goals() {
  return (
    <div className={styles.container}>
      <Goal value="$300,000" goalText="My goal" />
      <Goal value="59%" goalText="Goal achieved" />
      <Goal value="$300" goalText="Est. monthly income" />
    </div>
  );
}

export default Goals;
