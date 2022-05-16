import { DescriptionProjectsProps, IDescriptionHome } from "./interfaces/interfaces"

//? Si quiero agregar nuevos proyectos, modificar SOLO descriptionsProjects 
//? El 'id' debe de coincidir con el nombre de la imagen

// Projectos que se muestran en /projects
export const descriptionsProjects: DescriptionProjectsProps[] = [
    {
        id: "markdown",
        title: "Markdown Editor",
        desc: "Editor de makrdown con preview en tiempo real",
        url: "https://akus-markdown.vercel.app/",
        tags: ["HTML", "TailwindCSS", "React", "TypeScript", "Jotai"]
    },
    {
        id: "tasks",
        title: "Task Management",
        desc: "Permite crear distintas categorías para agupar tareas, además de cambiar su estado, editarlas y/o eliminarlas.",
        url: "https://taskakus.vercel.app/",
        tags: ["HTML", "TailwindCSS", "React", "Jotai", "TypeScript"]
    },
    {
        id: "jobs",
        title: "Search Jobs",
        desc: "Se listan distintos trabajos, en los cuales se puede filtrar según ciertos tags (al hacerles click)",
        url: "https://akusjobs.vercel.app/",
        tags: ["HTML", "TailwindCSS", "React", "Redux", "TypeScript"]
    },
    {
        id: "music",
        title: "Music",
        desc: "Aplicación que permite buscar y reproducir canciones. Se puede buscar por nombre, banda o género",
        url: "https://akusmusic.vercel.app/",
        tags: ["HTML", "SASS", "React", "TypeScript", "API"]
    },
    {
        id: "quiz",
        title: "Quiz",
        desc: "Aplicación de preguntas y respuestas que cuenta con distintas dificultades y categorías",
        url: "https://akusquiz.vercel.app/",
        tags: ["HTML", "SASS", "React", "TypeScript", "API"]
    },
    {
        id: "git",
        title: "GitHub Profiles",
        desc: "Aplicación que permite buscar perfiles de GitHub y ver sus datos.",
        url: "https://akusgit.vercel.app/",
        tags: ["HTML", "CSS", "React", "TypeScript", "API"]
    },
    {
        id: "shop",
        title: "Tienda virtual",
        desc: "Aplicación que simula una tienda online, cuenta con distintos productos los cuales se pueden ver sus datos y agregar al carrito.",
        url: "https://shopakus.netlify.app/",
        tags: ["HTML", "CSS", "React"]
    },
    {
        id: "todo",
        title: "Todo App",
        desc: "Aplicación para registrar distintas tareas, la cual cuenta la posibilidad de agregar, eliminar, vaciar y marcar como completada una tarea. Además incluye modo oscuro/claro.",
        url: "https://todoakus.netlify.app/",
        tags: ["HTML", "CSS", "React"]
    },
    {
        id: "fisica",
        title: "Circuitos física",
        desc: "Aplicación de física que calcula la resistencia total de un circuito y su intensidad. Para ello se han utilizado los circuitos más típicos.",
        url: "https://appfisica.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "chat",
        title: "Chat institucional",
        desc: "Aplicación para una escuela, la cual se pueden registrar alumnos y profesores. Cuenta con las funcionalidades de poder enviar consultas y chatear.",
        url: "https://chataurum.000webhostapp.com/",
        tags: ["HTML", "SASS", "JavaScript", "PHP"]
    },

]


// Projectos que se muestran en la página principal
export const descriptionsHome: IDescriptionHome[]  = [
    {
        id: "markdown",
        title: "Markdown Editor",
        desc: "Editor de makrdown con preview en tiempo real",
        url: "https://akus-markdown.vercel.app/",
        github: 'https://github.com/aKus-web/Markdown-editor',
        tags: ["HTML", "TailwindCSS", "React", "TypeScript", "Jotai"]
    },
    {
        id: "quiz",
        title: "Quiz App",
        desc: "Aplicación de preguntas y respuestas que cuenta con distintas dificultades y categorías.",
        url: "https://akusquiz.vercel.app/",
        github: 'https://github.com/aKus-web/Quiz-app',
        tags: ["HTML", "SASS", "React", "TypeScript", "API"]
    },
    {
        id: "music",
        title: "Music",
        desc: "Aplicación que permite buscar y reproducir canciones. Se puede buscar por nombre, banda o género.",
        url: "https://akusmusic.vercel.app/",
        github: 'https://github.com/aKus-web/Music-app',
        tags: ["HTML", "SASS", "React", "TypeScript", "API"]
    },
    {
        id: "chat",
        title: "Chat institucional",
        desc: "Aplicación para una escuela, la cual se pueden registrar alumnos y profesores. Cuenta con las funcionalidades de poder enviar consultas y chatear.",
        url: "https://chataurum.000webhostapp.com/",
        github: 'https://github.com/aKus-web/AURUM',
        tags: ["HTML", "SASS", "JavaScript", "PHP"]
    },
    {
        id: "tasks",
        title: "Task Management",
        desc: "Permite crear distintas categorías para agupar tareas, además de cambiar su estado, editarlas y/o eliminarlas.",
        url: "https://taskakus.vercel.app/",
        github: 'https://github.com/aKus-web/Task-manager',
        tags: ["HTML", "TailwindCSS", "React", "Jotai", "TypeScript"]
    },
]