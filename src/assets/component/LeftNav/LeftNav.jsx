import navStyle from './LeftNav.module.scss'
import { Link } from 'react-router-dom'

export default function LeftNav() {
  return (
    <>
      <div className={navStyle.navContainer}>
        <div className={navStyle.navTitleGroup}>
          <h2 className={navStyle.title}>Portfolio</h2>
          <h4 className={navStyle.subTitle}>produced by C.H.Kao</h4>
        </div>
        <input
          type="checkbox"
          id="navToggle"
          className={navStyle.toggleCheckbox}
        />
        <label htmlFor="navToggle" className={navStyle.navbarToggleLabel}>
          <span className={navStyle.navbarToggle}></span>
        </label>
        <div className={navStyle.indexGroup}>
          <Link to="/portfolio-index/portfolio" className={navStyle.navLink}>
            My Portfolio
          </Link>
          <Link to="/portfolio-index/aboutme" className={navStyle.navLink}>
            About C.H.Kao
          </Link>
        </div>
      </div>
    </>
  );
}