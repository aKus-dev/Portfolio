import Tag from "./Tag";
import TagContainer from "./TagContainer";
import styles from "./styles.module.css";


const SingleProject = () => {
  return (
    <div className={styles.singleProjectContainer}>
      <img src="./img/chat.jpg" alt="Chat" />

      <div className={styles.content}>
        <TagContainer>
          <Tag type="HTML" />
          <Tag type="CSS" />
          <Tag type="JavaScript" />
        </TagContainer>

        <p className={styles.description}>Lorem ipsum. Libero expedita eveniet magni et assumenda accusamus quis debitis fugiat!</p>

        <a target="_blank" rel="noreferrer" href="#">
          Ver proyecto  <i className="fas fa-long-arrow-alt-right arrow-right"></i>
        </a>

      </div>

    </div>
  );
};

export default SingleProject;
