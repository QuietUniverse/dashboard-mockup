import Button from "../UI/Button";

import styles from "./Tab.module.css";

function Tab({
  dataKey = "",
  activeTab,
  svgLink = "",
  viewBox = "0 0 24 24",
  setActiveTab,
}) {
  function handleTabChange() {
    setActiveTab(dataKey);
  }

  return (
    <li key={dataKey} onClick={handleTabChange}>
      <Button
        className={`${styles.tab} ${
          activeTab === dataKey ? styles.active : ""
        }`}
      >
        <svg height="100%" width="100%" viewBox={viewBox}>
          <use href={svgLink} />
        </svg>
      </Button>
    </li>
  );
}

export default Tab;
