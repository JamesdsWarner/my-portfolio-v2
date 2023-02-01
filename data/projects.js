export const techStackObjects = {
  javascript: { src: 'logos:javascript', alt: 'Javascript' },
  react: { src: 'logos:react', alt: 'React' },
  node: { src: 'logos:nodejs-icon', alt: 'NodeJS' },
  express: { src: 'skill-icons:expressjs-dark', alt: 'ExpressJS' },
  gatsby: { src: 'logos:gatsby', alt: 'Gatsby' },
  nextjs: { src: 'logos:nextjs-icon', alt: 'NextJS' },
  mongodb: { src: 'logos:mongodb-icon', alt: 'Mongo DB' },
  styledComponents: { src: 'simple-icons:styled-components', alt: 'Styled Components' },
  git: { src: 'logos:git-icon', alt: 'Git' },
  sass: { src: 'logos:sass', alt: 'Sass' },
  css: { src: 'logos:css-3', alt: 'CSS3' },
  html: { src: 'logos:html-5', alt: 'HTML5' },
};

// export const techStackObjects = {
//   javascript: { src: '/images/tech-stacks/JS.svg', alt: 'Javascript' },
//   react: { src: '/images/tech-stacks/React.svg', alt: 'React' },
//   node: { src: '/images/tech-stacks/Node.svg', alt: 'NodeJS' },
//   express: { src: '/images/tech-stacks/Express.svg', alt: 'ExpressJS' },
//   gatsby: { src: '/images/tech-stacks/Gatsby.svg', alt: 'Gatsby' },
//   nextjs: { src: '/images/tech-stacks/nextjs.svg', alt: 'NextJS' },
//   mongodb: { src: '/images/tech-stacks/mongodb.svg', alt: 'Mongo DB' },
//   styledComponents: { src: '/images/tech-stacks/styled-components.svg', alt: 'Styled Components' },
//   git: { src: '/images/tech-stacks/Git.svg', alt: 'Git' },
//   sass: { src: '/images/tech-stacks/Sass.svg', alt: 'Sass' },
//   css: { src: '/images/tech-stacks/CSS3.svg', alt: 'CSS3' },
//   html: { src: '/images/tech-stacks/HTML5.svg', alt: 'HTML5' },
// };

export const projects = [
  {
    projectTitle: 'To-Do app',
    projectUrl: 'https://my-todo-deploy.herokuapp.com/auth/',
    projectCode: 'https://github.com/JamesdsWarner/my-todo-app-deploy',
    cloudinaryImage: 'todo-gif.gif',
    imgSrc: {
      src: '/images/projects/to-do.png',
      alt: 'To Do app screenshot',
    },
    techStackArr: [
      techStackObjects.javascript,
      techStackObjects.react,
      techStackObjects.node,
      techStackObjects.express,
    ],
    projectDescription:
      'Developed a full stack Todo app leveraging ReactJS, JavaScript and Styled Components to build the the front end, whilst using NodeJS and Express for the back end. Created a database in MongoDB connected to the back end which meant users could sign up, log in, and retain their data.',
  },
  {
    projectTitle: 'Pokedex app',
    projectUrl: 'https://ubiquitous-cascaron-232b69.netlify.app/',
    projectCode: 'https://github.com/JamesdsWarner/pokedex-app',
    cloudinaryImage: 'pokedex-gif.gif',
    imgSrc: {
      src: '/images/projects/pokedex.png',
      alt: 'Pokedex app screenshot',
    },
    techStackArr: [techStackObjects.javascript, techStackObjects.react],
    projectDescription:
      'Built an app that displays the first 151 Pokémon, utilising ReactJS, JavaScript, Styled Components and React Redux. Populated the app with data obtained from PokéAPI, an open RESTful API for Pokémon data.',
  },
  {
    projectTitle: 'Blog prototype',
    projectUrl: 'https://musical-cobbler-48ef86.netlify.app/',
    projectCode: 'https://github.com/JamesdsWarner/my-awesome-blog',
    cloudinaryImage: 'blog-gif.gif',
    imgSrc: {
      src: '/images/projects/blog.png',
      alt: 'Blog prototype screenshot',
    },
    techStackArr: [techStackObjects.javascript, techStackObjects.react, techStackObjects.gatsby],
    projectDescription:
      'Created an example blog app leveraging ReactJS, JavaScript, Gatsby and Sass. Implemented an admin user interface using Netlify CMS.',
  },
];
