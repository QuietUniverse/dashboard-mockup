import styles from "./Ping.module.css";

function Ping({ className }) {
  return <div className={`${styles.ping} ${className}`}></div>;
}

export default Ping;
