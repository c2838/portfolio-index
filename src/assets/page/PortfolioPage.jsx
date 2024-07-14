import portfolioStyle from './PortfolioPage.module.scss'
import LeftNav from '../component/LeftNav'
import PortfolioContent from '../component/PortfolioContent'
import { PortfolioDatasContext } from '../context/constContext'
import { useContext } from 'react'


export default function PortfolioPage() {
  const portfolioDatas = useContext(PortfolioDatasContext);
  return (
    <PortfolioDatasContext.Provider value={{portfolioDatas}}>
      <section className={portfolioStyle.portfolioContainer}>
        <LeftNav />
        <PortfolioContent />
      </section>
    </PortfolioDatasContext.Provider>
  );
}