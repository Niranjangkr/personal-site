import {
    graphQL,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    freelance,
    // starbucks,
    dataChamp,
    school,
    // carrent,
    paddyScan,
    // jobit,
    BookTrack,
    // tripguide,
    threejs,
    github,
    linkedin,
    twitter,
    learnFinance,
    Wordpress,
    dataChampIn,
    firebase,
    Express,
    MERNAppImage,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      type: "Frontend",
    },
    {
      name: "CSS 3",
      icon: css,
      type: "Frontend",
    },
    {
      name: "JavaScript",
      icon: javascript,
      type: "Frontend",
    },
    {
      name: "Express",
      icon: Express,
      type: "Backend",
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
      type: "Frontend",
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      type: "Frontend",
    },
    {
      name: "Node JS",
      icon: nodejs,
      type: "Backend",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      type: "Database",
    },
    {
      name: "GraphQL",
      icon: graphQL,
      type: "Other",
    },
    {
      name: "Firebase",
      icon: firebase,
      type: "Database",
    },
    {
      name: "Three JS",
      icon: threejs,
      type: "Frontend",
    },
    {
      name: "git",
      icon: git,
      type: "Version Control",
    },
    {
      name: "Wordpress",
      icon: Wordpress,
      type: "Other",
    },
    
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/niranjan-gaonkar/"
    },
    {
      name: "Twitter",
      icon: twitter,
      url: "https://twitter.com/NiranjanGaonka7"
    },
    {
      name: "GitHub",
      icon: github,
      url: "https://github.com/Niranjangkr/"
    }
  ]
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Freelance Project: LearnFinance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "April 2023 - April 2023",
      points: [
        "Subscription-based Video Course Website.",
        "Implemented user login and signup functionality using Firebase Authentication.",
        "Utilized session-based authentication with session cookies for secure login.",
        "Embedded videos on the site using a secure video hosting service. and deployed the site on render.com",
        "Visit the website at: "
      ],
      url: ["https://learnfinance.co.in/"]
    },
    {
      title: "Next.js Developer",
      company_name: "Freelance Project [beCompany and beFrontend]",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "May 2023 - May 2023",
      points: [
        "Improved Styling and Implemented Features in a React.js Web Application.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented a carousel feature to showcase a list of jobs students got placed in, fetching data from an API and displaying it in card format.",
        "Implementing responsive design Worked on styling various pages and elements of the web application, utilizing CSS to achieve the desired visual effects.",
        "GitHub Repository: ",
      ],
      url: [
        "https://github.com/zeus11011/BeFrontend",
        "https://github.com/zeus11011/becompany"
      ]
    },
    {
      title: "Web Developer",
      company_name: "ZeemerQuest",
      icon: school,
      iconBg: "#383E56",
      date: "May 2023 - Jun 2023",
      points: [
        "Developed a Paddy Disease Classification web app as part of a group project for a tech event or competition organized by Zemetrics.",
        "Worked primarily on Paddy Disease Classification, utilizing Python, TensorFlow, FastAPI, React.js, and TensorFlow Serving",
        "Developed a paddy disease classification model using TensorFlow and Convolutional Neural Networks (CNN).",
        "Embedded the model into a React.js website, allowing users to drag and drop a paddy leaf image for disease identification.",
        "GitHub Repository: ",
      ],
      url: ["https://github.com/Niranjangkr/paddy-diseases-classificationML"]
    },
    {
      title: "WordPress Developer",
      company_name: "Freelance Project: Job Dashboard Site [datachamp] ",
      icon: dataChamp,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Jun 2023",
      points: [
        "Developed a job dashboard site using WordPress for data scientists and AI developers.",
        "Utilized plugins and a visually appealing theme to create a functional and attractive website.",
        "Implemented features including job listings, search functionality, and user profiles.",
        "Customized the theme to match the client's requirements and branding.",
        "Visit the website at: ",
      ],
      url: ["http://datachamp.in/"]
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "MERN CRUD App",
      description: "Dynamic web application with CRUD operations built using the MERN stack.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "yellow-text-gradient",
        },
      ],
      image: MERNAppImage,
      siteURL: "https://mern-app2.netlify.app/",
      source_code_link: "https://github.com/Niranjangkr/CRUD-Mongo"
    },
    {
      name: "Book Tracker",
      description:
        "Web application that enables users to add, retrieve, and display book information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "GraphQL",
          color: "yellow-text-gradient",
        },
        {
          name: "MongoDB Atlas",
          color: "green-text-gradient",
        },
        {
          name: "Apollo Client",
          color: "blue-text-gradient",
        },
      ],
      image: BookTrack,
      source_code_link: "https://github.com/Niranjangkr/GraphQL_Project",
    },
    {
      name: "Learn Finance Website",
      description:
        "Developed a secure subscription-based video course website, enabling clients to sell courses online. With Firebase authentication.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
      ],
      image: learnFinance,
      siteURL: "https://learnfinance.co.in/",
      source_code_link: "https://github.com/Niranjangkr/webisteLearnFInance",
    },
    {
      name: "DataChamp",
      description:
        "Designed and launched DataChamp, a dynamic job board platform connecting aspiring data professionals with top-notch opportunities",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
      ],
      image: dataChampIn,
      siteURL: "https://datachamp.in/",
    },
    {
      name: "Paddy Health Scan",
      description:
        "Web-based platform empowers farmers to effortlessly identify diseases in paddy crops by simply scanning pictures of their leaves.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "pink-text-gradient",
        },
        {
          name: "FastAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: paddyScan,
      source_code_link: "https://github.com/Niranjangkr/paddy-diseases-classificationML",
    },
  ];

const BlogLinks = [
    {
      url : "https://codewars.hashnode.dev/building-a-full-stack-graphql-application-a-guided-project-with-thenetninjauk"
    },
    {
      url: "https://codewars.hashnode.dev/building-a-subscription-based-video-course-website-with-nodejs-express-and-firebase"
    },
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials, BlogLinks };