import { motion } from 'framer-motion';
import styles from '../../../styles/home/projects/project.module.css'

interface Props {
    year: string;
    title: string;
    img: string;
    url: string;
    description: string;
}

const transitionConfig = {
    type: "spring",
    duration: 0.55,
    bounce: 0.35
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const Project = ({ year, title, description, url, img }: Props) => {

    return (
        <motion.article
            initial={{ scale: 0}}
            whileInView={{  scale: 1}}
            transition={transitionConfig}
            viewport={viewportConfig}
            style={{ backgroundImage: `url(../../../img/${img}.jpg)` }}
            className={styles.container}
        >

            <div className={styles.content}>

                <span className={styles.year}>{year}</span>

                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{description}</p>

                <a target="_blank" rel="noreferrer" href={url}>
                    <p className={styles.view}>

                        Ver proyecto  <i className="fas fa-long-arrow-alt-right arrow-right"></i>

                    </p>
                </a>
            </div>
        </motion.article>

    )
}

export default Project
