import { motion } from 'framer-motion';
import styles from '../../../styles/home/skills/skills.module.css'

const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}

const Skills = () => {
    return (
        <div className={styles.container}>

            <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.title}
            >
                Habilidades
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.subtitle}
            >
                Teconologías
            </motion.h2>

            <div className={styles.techContainer}>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0 }}
                    viewport={viewportConfig}
                >
                    <img title="Html" src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="HTML" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.15 }}
                    viewport={viewportConfig}
                >
                    <img title="Css" src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.25 }}
                    viewport={viewportConfig}
                >
                    <img title="Sass" src="https://img.icons8.com/color/96/000000/sass-avatar.png" alt="SASS" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.35 }}
                    viewport={viewportConfig}
                >
                    <img title="JavaScript" src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="JAVASCRIPT" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.45 }}
                    viewport={viewportConfig}
                >
                    <img title="Typescript" src="https://img.icons8.com/color/96/000000/typescript.png" alt="TYPESCRIPT" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.65 }}
                    viewport={viewportConfig}
                >
                    <img title="GitHub" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-github-with-cat-logo-an-online-community-for-software-development-logo-color-tal-revivo.png" alt="GITHUB" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ ...transitionConfig, delay: 0.55 }}
                    viewport={viewportConfig}
                >
                    <img title="React JS" src="https://img.icons8.com/color/96/000000/react-native.png" alt="REACT JS" />
                </motion.div>

            </div>
        </div>
    )
}

export default Skills
