import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from '../../../styles/home/projects/projects.module.css'
import Project from './Project';

const descriptions = {
    todo: {
        desc: "Aplicación para registrar distintas tareas, la cual cuenta la posibilidad de agregar, eliminar, vaciar y marcar como completada una tarea. Además incluye modo oscuro/claro.",
        url: "https://todoakus.netlify.app/"
    },
    fisica: {
        desc: "Aplicación de física que calcula la resistencia total de un circuito y su intensidad. Para ello se han utilizado los circuitos más típicos.",
        url: "https://appfisica.netlify.app/"
    },
    tienda: {
        desc: "Aplicación que simula una tienda online, cuenta con distintos productos los cuales se pueden ver sus datos y agregar al carrito.",
        url: "https://shopakus.netlify.app/"
    },
    chat: {
        desc: "Aplicación para una escuela, la cual se pueden registrar alumnos y profesores. Cuenta con las funcionalidades de poder enviar consultas y chatear.",
        url: "https://chataurum.000webhostapp.com/"
    }
}

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

    const { todo, fisica, tienda, chat } = descriptions;

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

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.subtitle}
            >
               <Link to="projects">  Todos mis proyectos  <i className="fas fa-long-arrow-alt-right arrow-right"></i> </Link>
            </motion.h2>




            <div className={styles.projectsContainer}>
                <Project year="2022" url={chat.url} title="Chat institucional" img="chat" description={chat.desc} animateX={-50} />
                <Project year="2022" url={fisica.url} title="Circuitos" img="fisica" description={fisica.desc}  animateX={50} />
                <Project year="2022" url={tienda.url} title="Tienda" img="shop" description={tienda.desc}  animateX={-50} />
                <Project year="2022" url={todo.url} title="Todo App" img="todo" description={todo.desc}  animateX={50} />
            </div>
        </section>
    )
}

export default Projects;
