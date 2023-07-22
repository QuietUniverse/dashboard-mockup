import styles from "./NavAction.module.css";

function NavAction({
  children,
  height = "60%",
  width = "60%",
  className = "",
  svgLink = "",
  viewBox = "0 0 24 24",
}) {
  return (
    <button type="button" className={`${styles.btn} ${className}`}>
      <svg height={height} width={width} viewBox={viewBox}>
        <use href={svgLink} />
      </svg>
      {children}
    </button>
  );
}

export default NavAction;
