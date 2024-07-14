import cardStyle from './ContentCard.module.scss'

export default function ContentCard({  demoUrl, imgUrl, title, introduction }) {
  return (
    <div className={cardStyle.contentCard}>
      <div className={cardStyle.imgContainer}>
        <a href={demoUrl} target="_blank">
          <img src={imgUrl} alt="demo-img" className={cardStyle.demoImg} />
        </a>
      </div>
      <h3 className={cardStyle.title}>{title}</h3>
      <p className={cardStyle.introduction}>{introduction}</p>
    </div>
  );
}