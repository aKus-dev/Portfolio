import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues, handleSubmit, validationSchema } from './formValues';

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

const FormContact = () => {


    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {
                ({ handleSubmit, status }) => (
                    <Form
                        noValidate
                        onSubmit={handleSubmit}
                        className={styles.formContainer}
                        action="https://formspree.io/f/mayvedpg"
                        method="POST"
                    >
                        {console.log(status)}
                        {status && <span className={styles.success}>{status}</span>}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...transitionConfig, delay: 0.25 }}
                            viewport={viewportConfig}
                            className={styles.fieldsContainer}
                        >
                            <label className={styles.label}>Tu email</label>
                            <Field autoComplete="off" name="email" type="email" className={styles.input} />

                            <span className={styles.error}>
                                <ErrorMessage name="email" />
                            </span>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...transitionConfig, delay: 0.45 }}
                            viewport={viewportConfig}
                            className={styles.fieldsContainer}
                        >
                            <label className={styles.label}>Mensaje</label>

                            <Field name="msg" type="email" className={styles.textarea} as="textarea" />

                            <span className={styles.error}>
                                <ErrorMessage name="msg" />
                            </span>



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
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormContact;
