import contentStyle from './PortfolioContent.module.scss'
import ContentCard from './ContentCard'
import { useContext } from 'react'
import { PortfolioDatasContext } from '../../context/constContext'

function ContentCards() {
  const { portfolioDatas } = useContext(PortfolioDatasContext) 
  const portfolios = portfolioDatas.map(item => {
    return (
      <ContentCard
        key={item.id}
        demoUrl={item.demoUrl}
        imgUrl={item.imgUrl}
        title={item.title}
        introduction={item.introduction}
      />
    );
  })
  return <>{portfolios}</>
}

export default function PortfolioContent() {
  return(
    <div className={contentStyle.contentContainer}>
      <ContentCards />
    </div>
  )
}