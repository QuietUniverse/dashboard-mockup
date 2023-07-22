import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.layout}>
      <img src="https://i.pravatar.cc/150?img=8" alt="That's you" />
      <div className={styles.text}>
        <h2>Hi mike,</h2>
        <p>Welcome back.</p>
      </div>
    </div>
  );
}

export default Welcome;
