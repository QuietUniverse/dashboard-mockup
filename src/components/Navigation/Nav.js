import { useState } from "react";

import Logo from "../UI/Logo";
import NavAction from "../UI/NavAction";
import Tab from "./Tab";
import Ping from "../UI/Ping";

import styles from "./Nav.module.css";

const isMobileWidth = window.innerWidth <= 700 ? true : false;

function Nav() {
  const [activeTab, setActiveTab] = useState("home");

  const layout = !isMobileWidth ? (
    <nav className={styles.layout}>
      <div className={styles[`center-elements`]}>
        <Logo height="30%" className={styles.responsive} />
        <NavAction className={styles.grouped} svgLink="sprite.svg#search" />
      </div>

      <ul className={styles[`nav-links`]}>
        <Tab
          dataKey="home"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#home"
        />
        <Tab
          dataKey="news"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#news"
          viewBox="0 -4 24 24"
        />
        <Tab
          dataKey="list"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#list"
        />
        <Tab
          dataKey="user"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#user"
        />
      </ul>

      <div className={styles[`center-elements`]}>
        <NavAction
          svgLink="sprite.svg#notifications"
          className={styles.notifications}
        >
          <Ping className={styles.ping} />
        </NavAction>

        <NavAction svgLink="sprite.svg#logout" className={styles.grouped} />
      </div>
    </nav>
  ) : (
    <nav className={styles.layout}>
      <ul className={styles[`nav-links`]}>
        <Tab
          dataKey="home"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#home"
        />
        <Tab
          dataKey="news"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#news"
          viewBox="0 -4 24 24"
        />
        <Tab
          dataKey="list"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#list"
        />
        <Tab
          dataKey="user"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          svgLink="sprite.svg#user"
        />

        <div className={styles[`center-elements`]}>
          <NavAction className={styles.grouped} svgLink="sprite.svg#search" />
        </div>
      </ul>

      <NavAction
        svgLink="sprite.svg#notifications"
        className={styles.notifications}
      >
        <Ping className={styles.ping} />
      </NavAction>
    </nav>
  );

  return layout;
}

export default Nav;
