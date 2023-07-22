import Nav from "./Navigation/Nav";
import HighlightsContainer from "./Highlights/HighlightsContainer";

import styles from "./Main.module.css";
import Welcome from "./Highlights/Welcome";
import Today from "./Highlights/Today";
import RecentTransactions from "./Highlights/RecentTransactions";
import RetirementContainer from "./Retirement/RetirementContainer";
import RetirementHeader from "./Retirement/RetirementHeader";
import Goals from "./Retirement/Goals";
import ContributionsOvertime from "./Retirement/ContributionsOvertime";
import Peers from "./Retirement/Peers";
import StrategyContainer from "./Retirement/StrategyContainer";
import StrategyUpdate from "./Retirement/StrategyUpdate";
import HousingAdvance from "./Retirement/HousingAdvance";

const isMobileWidth = window.innerWidth <= 700 ? true : false;

function Main() {
  const layout = !isMobileWidth ? (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main>
        <HighlightsContainer>
          <Welcome />
          <Today />
          <RecentTransactions />
        </HighlightsContainer>

        <RetirementContainer>
          <RetirementHeader />
          <Goals />
          <ContributionsOvertime />
          <Peers />
        </RetirementContainer>
      </main>
      <aside>
        <StrategyContainer>
          <h3>Retirement strategy</h3>
          <StrategyUpdate />
        </StrategyContainer>
        <HousingAdvance />
      </aside>
      <img src="design.svg" alt="curved design" className={styles.design} />
    </div>
  ) : (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>
      <Welcome />
      <HighlightsContainer>
        <Today />
      </HighlightsContainer>
      <RecentTransactions />

      <RetirementContainer>
        <RetirementHeader />
        <Goals />
        <ContributionsOvertime />
      </RetirementContainer>
      <Peers />
      <StrategyContainer>
        <h3>Retirement strategy</h3>
        <StrategyUpdate />
      </StrategyContainer>
    </div>
  );

  return layout;
}

export default Main;
