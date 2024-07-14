import AboutMeContent from '../component/AboutMeContent'
import LeftNav from '../component/LeftNav/LeftNav'
import mePageStyle from './AboutMePage.module.scss'

export default function AboutMePage() {
  return (
    <section className={mePageStyle.mePageContainer}>
      <LeftNav />
      <AboutMeContent />
    </section>
  )
}