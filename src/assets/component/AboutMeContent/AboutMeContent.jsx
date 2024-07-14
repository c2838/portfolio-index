import meStyle from './AboutMeContent.module.scss'

export default function AboutMeContent() {
  return (
    <div className={meStyle.meContainer}>
      <div className={meStyle.infoContainer}>
        <img
          src="https://scontent.fkhh1-2.fna.fbcdn.net/v/t39.30808-6/320580268_1189341291693274_269359445087337283_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BFgfLW7ICT0Q7kNvgEe3s_s&_nc_ht=scontent.fkhh1-2.fna&oh=00_AYDYEWeEqDKqwMfpdga7r423ytmNcgVTgBvkLE514ictgw&oe=669949CE"
          alt="avator"
          className={meStyle.avator}
        />
        <div className={meStyle.textInfo}>
          <h2 className={meStyle.chName}>高群軒</h2>
          <h5 className={meStyle.enName}>Chun-Hsuan Kao</h5>
          <p className={meStyle.introduction}>
            Born in 1995, I worked as a mechanical engineer for around five
            years. In 2022, I decided to change my career path and spent a year
            self-studying before enrolling in Alpha Camp's JavaScript full-stack
            course. I completed the course in July 2024 and am now actively
            seeking employment. I hope to leverage my past work experience and
            communication skills to quickly become a competent Junior Front-end
            Developer.
          </p>
        </div>
      </div>
    </div>
  );
}