import { motion } from 'framer-motion';
import styles from '../../styles/about/about.module.css';
import Personal from './Personal';


const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const About = () => {

    return (
        <section className={styles.container}>
            <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.title}
            >
                Algunas palabras sobre mi
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.subtitle}
            >
                Soy Agustín Vega, un desarrollador web frontend que es capaz de tomar un diseño y hacerlo realidad mediante interfaces de usuario interactivas y un diseño que se adpate a los distintos dispositivos del mercado.
            </motion.h2>

            <Personal />

        </section>
    )
}

export default About
