import Footer from '../home/footer/Footer';
import Header from '../home/header/Header';
import SingleProject from './SingleProject';

import styles from './styles.module.css'


const ProjectsScreen = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsScreen;
