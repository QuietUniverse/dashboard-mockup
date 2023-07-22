import styles from "./RecentTransactions.module.css";

function RecentTransactions() {
  return (
    <div className={styles.layout}>
      <h3>Recent transactions</h3>
      <div className={styles.transactions}>
        <div className={styles.transaction}>
          <span>2020-08-07</span>
          <p>Withdrawal Transfer to Bank-XXX11</p>
        </div>
        <div className={styles.transaction}>
          <span>2020-07-21</span>
          <p>Withdrawal Transfer to Bank-XXX11</p>
        </div>
        <div className={styles.transaction}>
          <span>2020-07-16</span>
          <p>Withdrawal Transfer to Bank-XXX11</p>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
