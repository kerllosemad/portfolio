/*
  ============================================================
  DATA FILE — this is the only file you need to touch
  to add new work, skills, or experience.
  ============================================================
*/

// ===== Graphic Design projects (posters) =====
const POSTER_IMAGES = [
  "design 11.jpg",
  "design 7new.jpg",
  "teacher.jpg",
  "design 4.jpg",
  "design 2.jpg",
  "design 1.jpg",
  "poster4.PNG",
  "noteboke2.jpg",
  "notebook1.png",
  "Book Cover (2).jpg",
  "Book Cover 2 (5).jpg",
  "Book Cover 1.jpg",
  "Book Cover 2.jpg",
  "Book Cover 3.jpg",
  "Book Cover 4.jpg"
];

const DESIGN_PROJECTS = POSTER_IMAGES.map((filename, index) => ({
  title: `Poster ${index + 1}`,
  category: "design",
  year: "2026",
  description: "Poster design.",
  tags: ["Poster Design"],
  link: "",
  image: `images/${filename}`
}));

// ===== Web Development projects =====
// لسه فاضية مؤقتًا — لما يبقى عندك مشروع ويب جاهز، ضيفه هنا زي المثال ده:
// {
//   title: "My Website Project",
//   category: "web",
//   year: "2026",
//   description: "Description here.",
//   tags: ["React", "Node.js"],
//   link: "",
//   image: "images/webproject1.jpg"
// }
const WEB_PROJECTS = [];

// ===== Combine both =====
const PROJECTS = [...DESIGN_PROJECTS, ...WEB_PROJECTS];

const SKILLS = {
  technical: [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap",
    "React", "Node.js", "SQL Databases", "NoSQL", "MongoDB",
    "Python", "C++", "C#"
  ],
  personal: [
    "Leadership", "Teamwork & Collaboration", "Effective Communication",
    "Poster Design", "Interpersonal Skills", "Marketing",
    "Problem Solving", "Time Management", "Creativity", "Flexibility"
  ]
};

const EXPERIENCE = [
  {
    title: "Graphic Designer",
    place: "Freelance",
    period: "Add dates",
    description: "Designed brand identities, social media kits, and print-ready visuals for clients across different industries — turning a rough idea or a one-line brief into something a client was proud to put their name on."
  },
  {
    title: "Web Developer",
    place: "Freelance",
    period: "Add dates",
    description: "Built responsive websites from scratch and from design files — handling everything from layout and styling to making sure the site actually works well on a phone, not just a laptop screen."
  }
];

const SERVICES = [
  {
    title: "Web Development",
    description: "I build fast, responsive websites that work as well on a phone as they do on a desktop — from a landing page to a full multi-section site, clean code with no unnecessary bloat."
  },
  {
    title: "Graphic Design",
    description: "Brand identities, social media kits, posters, and print-ready designs — visuals built to actually get noticed, not just fill space."
  }
];

const PROFILE = {
  name: "Kerllos Emad Zaki Atallah",
  role: "Graphic Designer & Web Developer",
  tagline: "I design the identity, then build the site that carries it. Scroll down and see for yourself.",
  bio: `I’m Kerllos Emad, a Graphic Designer and Full-Stack Developer. I offer both services independently or together, depending on what your project needs.
 
Graphic Design
 
I create visual identities, logos, marketing materials, and social media designs that communicate clearly and leave a lasting impression. Every piece is built around consistency, strong typography, and attention to detail, so your brand looks professional across every platform.
 
Web Development
 
I build complete web applications, from responsive, user-friendly front-end interfaces to secure and scalable back-end systems. My focus is on clean code, solid performance, and a smooth experience on every device.
 
I’m open to new projects and collaborations. Feel free to get in touch.`,
  photo: "images/me.jpg",
  email: "kerllosemad9@gmail.com",
  phone: "01555102455",
  github: "https://github.com/kerllosemad",
  linkedin: "https://linkedin.com/in/kerllos-emad",
  location: "Egypt"
};