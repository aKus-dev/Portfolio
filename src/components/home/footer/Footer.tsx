import styles from '../../../styles/home/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.infoContainer}>

                <div className={styles.dataContainer}>
                    <p className={styles.title}>Información de contacto</p>

                    <p className={styles.mail}>
                        <i className={`far fa-envelope ${styles.icon}`} ></i> agustinvegadev@gmail.com
                    </p>
                </div>

                <div className={styles.dataContainer}>
                    <p className={styles.title}>Redes sociales</p>

                    <a className={styles.mail} href="https://www.linkedin.com/in/agustin-vega/" target="_blank" rel="noreferrer" >
                        <i className={`fab fa-linkedin ${styles.icon}`} ></i>
                        Linkedin
                    </a>

                    <a className={styles.mail} href="https://github.com/aKus-web" target="_blank" rel="noreferrer" >
                        <i className={`fab fa-github ${styles.icon}`} ></i>
                        GitHub
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
