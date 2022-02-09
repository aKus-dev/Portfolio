import Footer from '../home/footer/Footer';
import Header from '../home/header/Header';
import SingleProject from './SingleProject';
import { descriptions } from '../home/projects/Projects';

import styles from './styles.module.css'


const ProjectsScreen = () => {

    const { todo, fisica, tienda, chat, git } = descriptions;

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <SingleProject
                    title="GitHub Profiles"
                    desc={git.desc}
                    url={git.url}
                    img="git"
                    tags={["HTML", "CSS", "JavaScript"]}
                />
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsScreen;
