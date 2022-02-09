import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { descriptionsHome } from '../../../data';

import styles from '../../../styles/home/projects/projects.module.css'
import Project from './Project';


const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const Projects = () => {

    return (
        <section id="projects" className={styles.container}>

            <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.title}
            >
                Proyectos
            </motion.span>

            <div>
                <div className={styles.barContainer}>
                    <motion.button
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={transitionConfig}
                        viewport={viewportConfig}
                        className={styles.subtitle}

                    >

                        <Link to="/projects"> Todos mis proyectos  <i className="fas fa-long-arrow-alt-right arrow-right"></i> </Link>
                    </motion.button>

                    <div className={styles.bar}></div>
                </div>
            </div>


            <div className={styles.projectsContainer}>
                {
                    descriptionsHome.map(({id, title, desc, url}) => (
                        <Project
                            year="2022"
                            title={title}
                            animateX={-50}
                            img={id}
                            description={desc}
                            url={url}
                        />
                    ))
                }


            </div>
        </section>
    )
}

export default Projects;
