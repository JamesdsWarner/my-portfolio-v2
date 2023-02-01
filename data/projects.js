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
      'Full stack built task helper app. Users can add a sticky note, and input their task. Once completed, they can mark it as done, or delete it. Users can also change the colour of the sticky, and clear the text altogether. Users can either login/signup or continue as a guest. If logged in, users can also change their display name and email address on the edit account page.',
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
      'A catalogue showing the first 151 Pokemon, gathering data from the PokéAPI open API. Uses have the ability to search for their Pokemon of choice, as well as filtering them by their types.',
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
      'A travel blog prototype. Users have the ability to browse the multiple blog posts. The admin of the blog uses Netlify CMS to make posts, adding text and images.',
  },
];
