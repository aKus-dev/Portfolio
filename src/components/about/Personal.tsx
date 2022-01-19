import { motion } from 'framer-motion';
import styles from '../../styles/about/about.module.css';


const transitionConfig = {
    duration: 0.65,
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const Personal = () => {
    return (
        <motion.div
            className={styles.personalContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transitionConfig}
            viewport={viewportConfig}
        >
            <div className={styles.personal}>
                <div>
                    <motion.h3 className={styles.title} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        Nombre:
                    </motion.h3>

                    <motion.p className={styles.subtitle} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        Agustín Vega
                    </motion.p>
                </div>

                <div>
                    <motion.h3 className={styles.title} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        Edad:
                    </motion.h3>

                    <motion.p className={styles.subtitle} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        20
                    </motion.p>
                </div>

                <div>
                    <motion.h3 className={styles.title} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        País:
                    </motion.h3>

                    <motion.p className={styles.subtitle} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                        Uruguay
                    </motion.p>
                </div>

            </div>


            <div>
                <motion.h3 className={styles.title} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                    Estudios:
                </motion.h3>

                <motion.p className={styles.subtitle} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                    UTU Informática 
                </motion.p>
            </div>


            <div>
                <motion.h3 className={styles.title} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                    Teconologías por aprender:
                </motion.h3>

                <motion.p className={styles.subtitle} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={transitionConfig} viewport={viewportConfig} >
                    Node JS, Express, Mongo DB
                </motion.p>
            </div>


        </motion.div>
    )
}

export default Personal
