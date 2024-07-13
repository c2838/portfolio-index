import navStyle from './LeftNav.module.scss'
import { Link } from 'react-router-dom'

export default function LeftNav() {
  return (
    <div className={navStyle.navContainer}>
      <div className={navStyle.navTitleGroup}>
        <h2 className={navStyle.title}>Portfolio</h2>
        <h4 className={navStyle.subTitle}>produced by C.H.Kao</h4>
      </div>
      <div className={navStyle.indexGroup}>
        <Link to="/portfolio" className={navStyle.portfolioLink}>My Portfolio</Link>
        <Link to="/aboutme" className={navStyle.aboutMeLink}>
          About C.H.Kao
        </Link>
      </div>
    </div>
  );
}