import styles from '../../../styles/home/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.infoContainer}>

                <div className={styles.dataContainer}>
                    <p className={styles.title}>Información de contacto</p>
                    <p className={styles.text}>No dude en comunicarse conmigo en cualquier momento.</p>

                    <p className={styles.mail}>
                        <i className={`far fa-envelope ${styles.icon}`} ></i> agustinvegadev@gmail.com
                    </p>
                </div>

                <div className={styles.dataContainer}>
                    <p className={styles.title}>Redes sociales</p>
                    <p className={styles.text}>Sigueme en mis redes</p>

                    <a className={styles.mail} href="https://www.linkedin.com/in/agustin-vega/" target="_blank" rel="noreferrer" >
                        <i className={`fab fa-linkedin ${styles.icon}`} ></i>
                        Linkedin
                    </a>

                    <a className={styles.mail} href="#" target="_blank" rel="noreferrer" >
                        <i className={`fab fa-twitter ${styles.icon}`} ></i>
                        Próximamente
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
