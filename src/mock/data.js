import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shamutalks|portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Young|Aspiring Kid', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey! This is',
  name: 'Shamunesh Selvam',
  subtitle: 'Web/App Developer | Cybersecurity enthusiast',
 
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '$(Whoami)',
  paragraphTwo: "Hey! my name is Shamunesh Selvam from Chennai, Currently pursuing B.Tech CSE Cybersecurity in SRM UNIVERSITY. I'm a Web/App Developer with unique and creative ideas :) The love for Tech and Development has increased Day by day and it tells me to do awesome stuff everyday! I also run a youtube channel to build up Developer Community for Beginners :)  ",
  paragraphThree: 'so, i wanted to contribute in it and make a cool platforms for beginners like me 🤜❤️..To describe in one word Happy kid 😍 strong universe believer☄️💫⚛️ ',
  
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'React-TODO App',
    info: 'Working on React is absoluty fun and interesting! This is a simple TODO React Web App that handles all my todo for my youtube channel. Made using all React components and states functons! Great working on it :)',
    info2: '',
    url: 'https://shamunesh.github.io/ReactJs-Todo-App/',
    repo: 'https://github.com/SHAMUNESH/ReactJs-Todo-App', 
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Tap-Music',
    info: 'An Music Generator Web App build exclusively with HTML,CSS and JAVASCRIPT! This will definetly be my favourite and fun working project:) High DOM Manupulation and JS events used for Good Design!',
    info2: '',
    url: 'https://tapmusicjsproject.netlify.app/',
    repo: 'https://github.com/SHAMUNESH/Tap-Music-DevEd-JSproject', 
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: '200OKWebdevcourse Web Work',
    info: '200OK is a Web Development course that has been launched by me for free to increase the Developer Community ! This is a glimpse of the website that, I have build to Register for the course :) with JS frameworks and cool animations, Responsive Design using Bootstrap!',
    info2: '',
    url: 'https://200okwebdevcourse.netlify.app/',
    repo: 'https://github.com/SHAMUNESH/200-OKWebDevCourse.github.io', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Mail Me',
  email: 'shamuselvam2001@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ShamuneshS?s=09',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shamunesh-selvam-b659721a1',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SHAMUNESH',
    },
  ],
};

export const githubButtons = {
  isEnabled: false, 
};
