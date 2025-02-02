import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  firebase,
  flutter,
  bootstrap,
  android,
  intrainz,
  boxoffice,
  chat,
  placetime,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React.JS Developer',
    icon: backend,
  },
  {
    title: 'Android Developer',
    icon: mobile,
  },
  {
    title: 'Flutter Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Intrainz Edutech',
    icon: intrainz,
    iconBg: '#E6DEDD',
    date: 'Oct 2022 - Nov 2022',
    points: [
      'Developed and maintained web applications using Vanila JS and other related technologies.',
      'Implemented responsive design and ensured cross-browser compatibility.',
      'Created various projects like basic hotel page, calculator and todo webpage',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Chat',
    description:
      'Web-based platform that allows users to send and receive messages in real-time. It allows users to create accounts and log in securely, ensuring that their messages are private and protected. The app also provides features such as message threading, message deletion, and liking of messages.',
    tags: [
      {
        name: 'react js',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://github.com/anurupreddy127/chat-app--React',
  },
  {
    name: 'Box Office',
    description:
      'Web application that enables users to access information about movies, ratings, and starring favourite movies. The web page would feature an intuitive and user-friendly interface that is easy to navigate, and it would be optimized for both desktop and mobile devices.',
    tags: [
      {
        name: 'react js',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: boxoffice,
    source_code_link: 'https://github.com/anurupreddy127/box-office',
  },
  {
    name: 'Place-Time',
    description:
      'A comprehensive time showing platform would be a useful tool for people who need to know the current time in different parts of the world. The app would allow users to select a location and display the current time in that location. It also shifts it background to night and day based on the time.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'git',
        color: 'pink-text-gradient',
      },
    ],
    image: placetime,
    source_code_link: 'https://github.com/anurupreddy127/Place-Time---Flutter',
  },
];

export { services, technologies, experiences, testimonials, projects };
