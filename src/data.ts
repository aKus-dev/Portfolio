import { DescriptionProjectsProps } from "./interfaces/interfaces"

//? Si quiero agregar nuevos proyectos, modificar SOLO descriptionsProjects 
//? El 'id' debe de coincidir con el nombre de la imagen

export const descriptionsHome = [
    {
        id: "todo",
        year: "2021",
        title: "Todo App",
        desc: "Aplicación para registrar distintas tareas, la cual cuenta la posibilidad de agregar, eliminar, vaciar y marcar como completada una tarea. Además incluye modo oscuro/claro.",
        url: "https://todoakus.netlify.app/",
    },
    {
        id: "fisica",
        year: "2021",
        title: "Circuitos física",
        desc: "Aplicación de física que calcula la resistencia total de un circuito y su intensidad. Para ello se han utilizado los circuitos más típicos.",
        url: "https://appfisica.netlify.app/",
    },
    {
        id: "shop",
        year: "2021",
        title: "Tienda virtual",
        desc: "Aplicación que simula una tienda online, cuenta con distintos productos los cuales se pueden ver sus datos y agregar al carrito.",
        url: "https://shopakus.netlify.app/",
    },
    {
        id: "chat",
        year: "2021",
        title: "Chat institucional",
        desc: "Aplicación para una escuela, la cual se pueden registrar alumnos y profesores. Cuenta con las funcionalidades de poder enviar consultas y chatear.",
        url: "https://chataurum.000webhostapp.com/",
    }
]

export const descriptionsProjects: DescriptionProjectsProps[] = [
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
