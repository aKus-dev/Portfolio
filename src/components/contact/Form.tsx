import { motion } from 'framer-motion';
import { FormEvent } from 'react';
import styles from '../../styles/contact/form.module.css'

const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}

const Form = () => {

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.25 }}
                viewport={viewportConfig}
                className={styles.fieldsContainer}
            >
                <label className={styles.label}>Tu email</label>
                <input className={styles.input} type="email" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.45 }}
                viewport={viewportConfig}
                className={styles.fieldsContainer}
            >
                <label className={styles.label}>Mensaje</label>

                <textarea className={styles.textarea}>

                </textarea>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ ...transitionConfig, delay: 0 }}
                viewport={viewportConfig}
                className={styles.button}
            >
                <i className={`far fa-envelope ${styles.icon}`} ></i>
                Enviar
            </motion.button>
        </form>
    )
}

export default Form
