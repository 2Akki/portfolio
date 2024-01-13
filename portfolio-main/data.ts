import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'Sql and nodeJs',
  },
  { Icon: RiComputerLine,
    title: 'Game Development',
    about: 'I have good knowledge of Unity and Unreal ive made multiple prjects on both platforms'
  },
  { Icon: RiComputerLine,
    title: 'ReactJs',
    about: "I've worked extensively with React and have a strong understanding of almost everything related to it."
  },
  { Icon: RiComputerLine,
    title: 'C#',
    about: 'I have created multiple projects using C#, including games, websites, and more.'
  },
    {
    Icon: RiComputerLine,
    title: 'JavaScript',
    about: 'I have good knowledge of core JavaScript and ECMA ES6',
  },
];

export const languages: ISkill[] = [
  {
    name: 'HTML',
    level: '88',
    Icon: BsCircleFill,
  },
  {
    name: 'JavaScript',
    level: '99',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS,SASS',
    level: '85',
    Icon: BsCircleFill,
  },
  {
    name: 'C#',
    level: '85',
    Icon: BsCircleFill,
  },
  {
    name: 'React.js',
    level: '96',
    Icon: BsCircleFill,
  },
  {
    name: 'Python',
    level: '70',
    Icon: BsCircleFill,
  },
  {
    name: 'Node.js',
    level: '64',
    Icon: BsCircleFill,
  },
  {
    name: 'C++',
    level: '64',
    Icon: BsCircleFill,
  },
  {
    name: 'MongoDB',
    level: '60',
    Icon: BsCircleFill,
  },
  {
    name: 'MySQL',
    level: '50',
    Icon: BsCircleFill,
  },
  {
    Icon: BsCircleFill,
    name: 'Game Development',
    level: '80',
  },

];

export const tools: ISkill[] = [
   {
     name: 'Unreal Engine',
     level: '90',
     Icon: BsCircleFill,
   }, {
    name: 'Unity',
    level: '70',
    Icon: BsCircleFill,
  },

   {
     Icon: BsCircleFill,
     name: 'Visual Studio Code',
     level: '90',
   },
   {
    Icon: BsCircleFill,
    name: 'Visual Studio 2022',
    level: '70',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'FeedBack',
    description: 'testing purposes',
    image_path: '/images/FeedbackUi.png',
    deployed_url: 'https://feedback-app-pi-one.vercel.app/',
    github_url: 'https://github.com/2Akki/FeedbackApp',
    category: ['react','javascript'],
    key_tech: ['react','Css',],
  },
  {
    id: 2,
    name: 'GitHub Finder',
    description: 'This app for testing purposes',
    image_path: '/images/GitHubFinder.png',
    deployed_url: '',
    github_url: 'https://github.com/2Akki/GITHUB-FINDER',
    category: ['react','javascript'],
    key_tech: ['react', 'node', 'Tailwind'],
  },
  {
    id: 3,
    name: 'Nexter',
    description: 'for training html/Css skills',
    image_path: '/images/Nexter.png',
    deployed_url: 'https://nexter-ruby.vercel.app/',
    github_url: 'https://github.com/2Akki/Nexter/tree/main',
    category: ["html","css/scss",],
    key_tech: ['html','Css','Scss'],
  },
  {
    id: 4,
    name: 'Natours',
    description: 'testing diffrent css features and creating it in real life projects',
    image_path: '/images/Natours.png',
    deployed_url: 'https://natours-proj.vercel.app/#',
    github_url: 'https://github.com/2Akki/Natours-Proj',
    category: ['css/scss'],
    key_tech: ['css', 'scss','html'],
  },
 
  {
    id: 5,
    name: 'Fruit Ninja',
    description: 'This app for testing purposes',
    image_path: '/images/FruitNinja.png',
    deployed_url: '',
    github_url: 'https://github.com/2Akki/FruitNinja',
    category: ['unity','C#'],
    key_tech: ['Unity', 'C#'],
  },
  {
    id: 6,
    name: 'Travel Reminder',
    description: 'travell reminder app for you packings travel and more',
    image_path: '/images/travelReminder.png',
    deployed_url: 'https://travelreminder.vercel.app/',
    github_url: 'https://github.com/2Akki/Travel-Reminder',
    category: ['react','javascript'],
    key_tech: ['react', 'JavaScript','Css'],
  },
  {
    id: 6,
    name: 'Pizzuria',
    description: 'Pizzuria is an app that is made to order pizzas, do note that the api is not functionel, i have closed the api. But all the code is still there it has just been adjusted so it can fit.',
    image_path: '/images/Pizzuria.png',
    deployed_url: '',
    github_url: 'https://github.com/2Akki/Pizzuria',
    category: ['react','javascript',],
    key_tech: ['react', 'JavaScript','Css','Tailwind'],
  },
];
