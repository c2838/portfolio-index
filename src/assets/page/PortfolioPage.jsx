import portfolioStyle from './PortfolioPage.module.scss'
import LeftNav from '../component/LeftNav'


export default function PortfolioPage() {
  return (
    <section className={portfolioStyle.portfolioContainer}>
      <LeftNav />
    </section>
  )
}