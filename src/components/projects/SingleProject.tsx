import Tag from "./Tag";
import TagContainer from "./TagContainer";
import styles from "./styles.module.css";
import { validateTypes } from '../../interfaces/interfaces';

interface SingleProjectProps {
  img:string;
  desc:string;
  url:string;
  title:string;
  tags: validateTypes[];
}


const SingleProject = ({img, desc, url, title, tags}:SingleProjectProps) => {
  return (
    <div className={styles.singleProjectContainer} style={{
      backgroundImage: `url(./img/${img}.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
 {/*      <img src={`./img/${img}.jpg`} alt="Chat" /> */}

      <div className={styles.content}>

        <h2>{title}</h2>

        <TagContainer>
          {
            tags.map(tag => <Tag type={tag} /> )
          }
        </TagContainer>

        <p className={styles.description}>{desc}</p>

        <a target="_blank" rel="noreferrer" href={url}>
          Ver proyecto  <i className="fas fa-long-arrow-alt-right arrow-right"></i>
        </a>

      </div>

    </div>
  );
};

export default SingleProject;
