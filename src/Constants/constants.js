/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  npmIcon,
  figmaIcon,
  laravel,
  php,
  angular,
  junit,
  hibernate,
  typescript,
  springboot,
  api,
  avatar,
  citronix,
  idea,
  waiting,
  cuisine,
  quiz,
  itLens,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  npmIcon,
  figmaIcon,
  avatar,
  laravel,
  php,
  angular,
  junit,
  springboot,
  hibernate,
  typescript,
  api,
  citronix,
  idea,
  waiting,
  cuisine,
  quiz,
  itLens,
  //
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "My name is Imane, I'm 22 years old and a Full Stack Web Developer based in Morocco. I am currently a student at YouCode with a strong passion for web technologies, Java development, and AI integration.",
    'Outside of my academic and professional pursuits, I enjoy exploring creative activities, diving into new tech trends, and continuously improving my skills.',
    "I'm always excited to collaborate with individuals and teams who share my drive for innovation and creating impactful projects. Thank you for visiting my portfolio!",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Citronix',
    description: 'Developed a Spring Boot and PostgreSQL application to manage farms, fields, trees, harvests, and sales while adhering to agricultural constraints.',
    image: citronix,
    source_code_link: 'https://github.com/imane-bouabidi/Citronix.git',
  },
  {
    name: 'YouQuiz',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: quiz,
    source_code_link: 'https://github.com/imane-bouabidi/YouQuiz.git',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Waiting Room',
    description: 'Developed an API with Spring Boot, featuring queue management, scheduling, and statistics. Implemented exception handling, and YAML configurations using: Spring Data JPA, Spring Web, MapStruct, MySQL (Docker), Postman, DTOs.',
    image: waiting,
    source_code_link: 'https://github.com/imane-bouabidi/waiting_room.git',
    demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'ItLens',
    description: 'Built a RESTful API for IT surveys using Spring Boot. Features include survey structuring, user participation, and results analysis with PostgreSQL, and Spring Data JPA',
    image: itLens,
    source_code_link: 'https://github.com/imane-bouabidi/Survey_IT.git',
    demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'Bati-Cuisine',
    description: 'Created BatiCuisine, a Java app for calculating kitchen renovation costs, including materials and labor, with features like client management and custom quotes. Built with Java 8 and PostgreSQL.',
    image: cuisine,
    source_code_link: 'https://github.com/imane-bouabidi/Bati-Cuisine.git',
    demo_link: 'https://camo.githubusercontent.com/1f7fb7873058b029992d30b8601d2c36582f6bb399482c560d5560c2d02fc37e/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d4773314e6d733459336c6a4e4752684e3270354f574a33625456304f484675616d77314d574a314e6d31344d4849786254567963535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f76553246666b6d386e6744494e336d6d36572f67697068792e676966',
  },
  {
    name: 'IdeaSphere',
    description: 'Created a Laravel-based platform for sharing and discussing creative ideas, with multi-role functionality (admin, users) and tailored back-office experiences. The project includes UML diagrams and responsive page mockups for both desktop and mobile.',
    image: idea,
    source_code_link: 'https://github.com/imane-bouabidi/IdeaSphere.git',
    demo_link: 'https://disneyplusreplica.netlify.app',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'npm',
    title: 'npm',
    icon: npmIcon,
    description:
      'When it comes to building web applications, I prefer using npm as my runtime environment over Yarn. I have expertise to develop powerful and scalable web applications.',
  },
  {
    id: 'Spring',
    title: 'Spring Boot',
    icon: springboot,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'TypeScript',
    title: 'TypeScript',
    icon: typescript,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'Hibernate',
    title: 'Hibernate',
    icon: hibernate,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'REST',
    title: ' REST API',
    icon: api,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'Laravel',
    title: 'Laravel',
    icon: laravel,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'Angular',
    title: 'Angular',
    icon: angular,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'JUnit',
    title: 'JUnit',
    icon: junit,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'PHP',
    title: 'PHP',
    icon: php,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
