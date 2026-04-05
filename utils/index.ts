import {
  ExperienceItemProps,
  NavItems,
  ProjectsProps,
  TagProps,
} from "@/types";
import {
  ClerkIcon,
  CssIcon,
  JsIcon,
  NestIcon,
  NextJsIcon,
  ReactIcon,
  TalwindIcon,
  TypescriptIcon,
  VueIcon,
} from "@/components/icons";

export const navItems: NavItems[] = [
  { title: "</LN>", label: "inicio", url: "#top" },
  { title: "Experiencia", label: "experiencia", url: "#experiencia" },
  { title: "Proyectos", label: "proyectos", url: "#proyectos" },
  { title: "Sobre Mí", label: "sobre-mi", url: "#sobre-mi" },
  { title: "Contacto", label: "contacto", url: "#contacto" },
];
export const experienceItems: ExperienceItemProps[] = [
  {
    date: "Septiembre 2024 - Actualidad",
    title: "Desarrollador FrontEnd - Agora Partnerships",
    description: `Desarrollé componentes en React + TypeScript (formularios dinámicos, tablas interactivas, modales)\nIntegré React Router DOM con tabs dinámicos y estado persistente en URL\nMejoré el rendimiento de la app optimizando el Speed Index\nColaboré con diseño usando Figma para mantener consistencia visual\nGestioné flujos de estado complejos con Zustand`,
    link: "https://agorapartnerships.org",
    tecnology:
      "React, TypeScript, React Router DOM, Zustand, Ant Design, Tailwind CSS",
    softSkills:
      "Colaboración en equipo, atención al detalle, comunicación efectiva, gestión de tiempo, solución de problemas",
  },
  {
    date: "Enero 2023 - Septiembre 2024",
    title: "Desarrollador Full-Stack - FooTalenGroup ",
    description: `Construí interfaces complejas con React, Next.js y Tailwind CSS\nDesarrollé APIs escalables con Node.js, Express, PostgreSQL y MongoDB\nIntegré servicios externos y lideré proyectos full-stack de punta a punta\nTrabajé en entornos ágiles con comunicación clara entre equipos`,
    link: "https://www.linkedin.com/company/footalentgroup/",
    tecnology:
      "Astro, React, TypeScript, Next.js, Node.js, Clerk, Liveblocks, Convex, Tailwind CSS, Jest, Swagger, Sequelize.",
    softSkills:
      "Comunicación efectiva, Trabajo en equipo, Resolución de problemas, Pensamiento crítico, Adaptabilidad, Gestión del tiempo, Atención al detalle, Paciencia y persistencia, Colaboración en entornos ágiles, Curiosidad y deseo de aprendizaje continuo, Ética profesional.",
  },
  {
    date: "Noviembre 2016 - Octubre 2024",
    title: "Policía - Gobierno de la Ciudad de Buenos Aires",
    description: `Coordiné equipos desarrollando habilidades de liderazgo bajo presión\nPerfeccioné comunicación efectiva y toma de decisiones en situaciones críticas\nMantuve altos estándares de trabajo en equipo y responsabilidad durante 8 años`,
    softSkills:
      "Comunicación efectiva, Trabajo en equipo, Liderazgo, Resolución de problemas, Adaptabilidad, Pensamiento crítico, Gestión del tiempo, Empatía, Creatividad, Capacidad de negociación, Toma de decisiones, Orientación a resultados, Capacidad de motivar a otros,",
  },
];

export const tags: { [key: string]: TagProps } = {
  NEXT: {
    name: "Next.js",
    icon: NextJsIcon(),
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TalwindIcon(),
  },
  CLERK: {
    name: "Clerk",
    icon: ClerkIcon(),
  },
  TYPESCRIPT: {
    name: "Typescript",
    icon: TypescriptIcon(),
  },
  REACT: {
    name: "React",
    icon: ReactIcon(),
  },
  VUEJS: {
    name: "Vuejs",
    icon: VueIcon(),
  },
  NEST: {
    name: "Nest",
    icon: NestIcon(),
  },
  JAVASCRIPT: {
    name: "Javascript",
    icon: JsIcon(),
  },
  CSS: {
    name: "CSS",
    icon: CssIcon(),
  },
};
export const projects: ProjectsProps[] = [
  {
    title: "React GPT",
    description:
      "React GPT es una aplicación full-stack (React + NestJS + TypeScript) que integra la API de OpenAI para resolver casos reales: asistentes conversacionales con respuestas en streaming, generación de texto, transcripción y traducción de audio (STT), texto a voz (TTS) y generación/variación de imágenes. La arquitectura se basa en use cases y DTOs tipados.",
    link: "",
    github: "https://github.com/luisr-nava/React-GPT",
    backendRepo: "https://github.com/luisr-nava/Nest-GPT",
    image: "/projects/react-gpt.webp",
    tags: [tags.REACT, tags.TYPESCRIPT, tags.NEST, tags.TAILWIND],
    tecnology: "React",
  },
  {
    title: "Mirro Clone",
    description:
      "Mirro Clone es una réplica funcional de Mirro, diseñada para proporcionar una plataforma donde los equipos pueden mantenerse organizados, alineados y comprometidos. La aplicación permite la creación de perfiles de equipo, la organización de objetivos y la gestión del feedback entre los miembros del equipo",
    link: "https://mirro-clone.vercel.app/",
    github: "https://github.com/luisnava6667/mirro-clone",
    image: "/projects/mirro-clone.webp",
    tags: [tags.NEXT, tags.TYPESCRIPT, tags.CLERK, tags.TAILWIND],
    tecnology: "Next.js",
  },
  {
    title: "Cotizador de Criptomonedas",
    description:
      "Aplicación web para consultar el precio de tus cripto favoritas de forma simple y clara. Elegís moneda fiat (p. ej., USD) y criptomoneda (p. ej., Bitcoin), y obtenés al instante la cotización actual, el máximo y mínimo del día, la variación 24 h y la hora de la última actualización. Todo en una interfaz limpia que no pide manual de uso",
    link: "https://cripto-typescript-five.vercel.app/",
    github: "https://github.com/luisr-nava/Cripto-Typescript",
    image: "/projects/cotizador-cripto-ts.webp",
    tags: [tags.REACT, tags.TYPESCRIPT, tags.CSS],
    tecnology: "React",
  },
  {
    title: "Cotizador de Criptomonedas",
    description:
      "Aplicación web para consultar el precio de tus cripto favoritas de forma simple y clara. Elegís moneda fiat (p. ej., USD) y criptomoneda (p. ej., Bitcoin), y obtenés al instante la cotización actual, el máximo y mínimo del día, la variación 24 h y la hora de la última actualización. Todo en una interfaz limpia que no pide manual de uso",
    link: "https://cripto-vue-js.vercel.app/",
    github: "https://github.com/luisr-nava/Cripto-VueJs",
    image: "/projects/cotizador-cripto-ts.webp",
    tags: [tags.VUEJS, tags.TYPESCRIPT, tags.CSS],
    tecnology: "Vue",
  },
  {
    title: "Contador de Calorías",
    description:
      "Aplicación para registrar comidas y actividades y ver, en tiempo real, cómo queda tu balance diario. Elegís la categoría (comida/ejercicio), ingresás la actividad y las calorías, y la app calcula al instante consumidas, quemadas y la diferencia. Ideal para domar antojos… o justificar la pizza con una bici después",
    link: "https://calorie-traker.vercel.app/",
    github: "https://github.com/luisr-nava/calorie-traker",
    image: "/projects/calorie.webp",
    tags: [tags.REACT, tags.TYPESCRIPT, tags.TAILWIND],
    tecnology: "React",
  },
  {
    title: "Calculadora de Propinas y Consumos",
    description:
      "Aplicación para registrar comidas y actividades y ver, en tiempo real, cómo queda tu balance diario. Elegís la categoría (comida/ejercicio), ingresás la actividad y las calorías, y la app calcula al instante consumidas, quemadas y la diferencia. Ideal para domar antojos… o justificar la pizza con una bici después",
    link: "https://calc-tip-orcin.vercel.app/",
    github: "https://github.com/luisr-nava/calc-tip/tree/main",
    image: "/projects/triptrack.webp",
    tags: [tags.REACT, tags.TYPESCRIPT, tags.TAILWIND],
    tecnology: "React",
  },
  {
    title: "Memory Game",
    description:
      "Juego clásico de memoria donde pondrás a prueba tu “RAM humana”. El objetivo es descubrir y emparejar cartas iguales recordando su posición, completando la partida con el menor número de movimientos posible. Incluye niveles de dificultad que ajustan la cantidad de pares y el desafío, ofreciendo una experiencia ágil y entretenida para mejorar memoria y concentración.",
    link: "https://memory-game-delta-one.vercel.app/",
    github: "https://github.com/luisr-nava/memory-game",
    image: "/projects/memory-game.webp",
    tags: [tags.REACT, tags.TYPESCRIPT, tags.TAILWIND],
    tecnology: "React",
  },
  {
    title: "Cotizador de Prestamos",
    description:
      "Herramienta interactiva para simular créditos en tiempo real. Ajustás monto, tasa y plazo, y la app calcula al instante la cuota mensual y el costo total del préstamo, ideal para comparar escenarios sin pelearte con una hoja de cálculo.",
    link: "https://cotizador-prestamos-react-neon.vercel.app/",
    github: "https://github.com/luisr-nava/cotizador-prestamos-react",
    image: "/projects/cotizador.webp",
    tags: [tags.REACT, tags.TAILWIND, tags.JAVASCRIPT],
    tecnology: "React",
  },
  {
    title: "GitHub Explorer",
    description:
      "Aplicación para explorar perfiles y proyectos de GitHub de forma rápida y clara. Permite buscar usuarios por nombre, ver su nombre, ubicación, biografía y seguidores, además de buscar repositorios por nombre y consultar detalles como descripción, lenguaje principal, estrellas y forks. Ideal para ponerse en “modo stalker profesional” pero con buena UX",
    link: "https://git-hub-search-zeta.vercel.app/",
    github: "https://github.com/luisr-nava/GitHubSearch",
    image: "/projects/github-explorer.webp",
    tags: [tags.REACT, tags.TAILWIND, tags.TYPESCRIPT],
    tecnology: "React",
  },
  {
    title: "Administrador Pacientes Vue",
    description:
      "Aplicación desarrollada con Vue.js que permite gestionar y organizar la información de pacientes. Es ideal para su uso en clínicas médicas, veterinarias o cualquier otro entorno que requiera un seguimiento detallado de los pacientes.",
    link: "https://administrador-pacientes-vue-js.vercel.app/",
    github: "https://github.com/luisnava6667/Administrador-Pacientes-VueJs",
    image: "/projects/vue-segimiento.webp",
    tags: [tags.VUEJS, tags.TAILWIND],
    tecnology: "Vue.js",
  },
  {
    title: "Administrador Pacientes React",
    description:
      "Aplicación desarrollada con React que permite gestionar y organizar la información de pacientes. Es ideal para su uso en clínicas médicas, veterinarias o cualquier otro entorno que requiera un seguimiento detallado de los pacientes.",
    link: "https://pacientes-zustand-pywciwwkv.vercel.app/",
    github: "https://github.com/luisr-nava/pacientes-zustand",
    image: "/projects/seguimieto.webp",
    tags: [tags.REACT, tags.TAILWIND],
    tecnology: "React",
  },
  {
    title: "Cotizador de Seguros",
    description:
      "Herramienta interactiva para simular seguros en tiempo real. Ajustás monto, tipo de seguro y plazo, y la app calcula al instante la cuota mensual y el costo total del seguro, ideal para comparar escenarios sin pelearte con una hoja de cálculo.",
    link: "https://cotizador-react-liard.vercel.app/",
    github: "https://github.com/luisr-nava/Cotizador-React",
    image: "/projects/cotizador-auto.webp",
    tags: [tags.REACT, tags.TAILWIND, tags.JAVASCRIPT],
    tecnology: "React",
  },

  {
    title: "AppDolar",
    description:
      "Aplicación que permite consultar en tiempo real el precio del dólar en Argentina. Proporciona diferentes cotizaciones, incluyendo el dólar oficial, blue, y otras variantes, brindando información actualizada y accesible para los usuarios",
    link: "https://app-dolar-cotizacion.vercel.app/",
    github: "https://github.com/luisnava6667/app-dolar",
    image: "/projects/appdolar.webp",
    tags: [tags.NEXT, tags.TAILWIND],
    tecnology: "Next.js",
  },
];
