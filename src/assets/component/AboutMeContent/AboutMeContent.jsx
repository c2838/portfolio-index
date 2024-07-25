import avatarImg from '../../img/avatar.jpg'
import meStyle from './AboutMeContent.module.scss'

export default function AboutMeContent() {
  return (
    <div className={meStyle.meContainer}>
      <div className={meStyle.infoContainer}>
        <img
          src={avatarImg}
          alt="avatar"
          className={meStyle.avatar}
        />
        <div className={meStyle.textInfo}>
          <h2 className={meStyle.chName}>高群軒</h2>
          <h5 className={meStyle.enName}>Chun-Hsuan Kao</h5>
          <p className={meStyle.introduction}>
            Born in 1995, I worked as a mechanical engineer for around five
            years. In 2022, I decided to change my career path and spent a year
            self-studying before enrolling in a JavaScript full-stack course at
            Alpha Camp. I completed the course in July 2024 and am now actively
            seeking employment. I hope to leverage my past work experience and
            communication skills to quickly become a competent Junior Front-end
            Developer.
          </p>
        </div>
      </div>
    </div>
  );
}