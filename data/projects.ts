
export type Project = {
  name: string;
  slug: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
  challenges: string;
  futureImprovements: string;
};

export const projects: Project[] = [
  {
    name: "UniBus",
    slug: "unibus",
    description:
      "UniBus is a university bus booking platform designed to make student transportation more convenient. It allows students to explore bus schedules and reserve seats in advance, helping reduce the hassle of manual booking and making campus travel more organized.",
    image: "/UNIBUS.jpg",
    liveLink: "https://unibus-sec.infinityfreeapp.com/",
    githubLink: "https://github.com/tosamia/unibus",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    challenges:
      "Designing a straightforward booking workflow, connecting the frontend with PHP backend functionality, and managing booking information through MySQL. I focused on making the reservation process simple and understandable for students.",
    futureImprovements:
      "Implement real-time seat availability, online payment integration, booking confirmation notifications, and an improved dashboard for managing reservations.",
  },

  {
    name: "Smart Retain Manager",
    slug: "smart-retain-manager",
    description:
      "Smart Retain Manager is a collaborative web application developed to manage business information and application data efficiently. I contributed to backend development, working with server-side functionality, API routes, and database operations to support the application's features.",
    image: "/dashboard.png",
    githubLink: "https://github.com/monima40/smart-retain-manager",
    technologies: ["JavaScript", "Node.js", "Express.js", "MySQL"],
    challenges:
      "Working with backend routes, organizing server-side logic, handling database operations, and connecting different application functionalities. Debugging backend issues also helped me understand how requests move through a server and interact with a database.",
    futureImprovements:
      "Strengthen API security, improve input validation and error handling, optimize database queries, and introduce more maintainable backend architecture.",
  },

  {
    name: "FitLog",
    slug: "fitlog",
    description:
      "FitLog is a responsive fitness application that allows users to explore workouts, view exercise details, save their favorite workouts, and organize daily training plans. It provides a structured workout library to help users plan their fitness routines more efficiently.",
    image: "/Screenshot%202026-11-17%20234802.jpg",
    liveLink: "https://fitlog-coral-nu.vercel.app/",
    githubLink: "https://github.com/tosamia/B14-A6-Fit-Log",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    challenges:
      "Integrating external API data, building dynamic workout detail pages, managing shared state across multiple pages, and keeping saved workouts and daily plans synchronized with Local Storage. I also worked on handling loading states, route errors, and maintaining a consistent responsive interface.",
    futureImprovements:
      "Introduce user authentication, workout history, progress tracking, personalized fitness goals, and data synchronization across devices.",
  },

  {
    name: "BazarDor",
    slug: "bazardor",
    description:
      "BazarDor is a Bengali-first market price tracking application designed to help users explore the prices of everyday essentials in Bangladesh. It provides product browsing, category-based navigation, and market price information through a dynamic and responsive interface.",
    image: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    challenges:
      "Integrating API data into a dynamic interface, organizing product information across different pages, implementing category-based navigation, and handling price sorting accurately. I also focused on presenting market information in a clean and accessible way for Bengali-speaking users.",
    futureImprovements:
      "Expand market coverage, introduce advanced search and filtering, improve price comparison features, add historical price trends, and provide personalized shopping insights.",
  },

  {
    name: "Doctor Appointment",
    slug: "doctor-appointment",
    description:
      "Doctor Appointment is a web application designed to simplify the process of booking medical appointments. It aims to help patients request appointments more conveniently while reducing the time and effort involved in traditional appointment scheduling.",
    image: "",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    challenges:
      "Designing a user-friendly appointment booking workflow, validating patient information, connecting frontend forms with PHP backend functionality, and managing appointment data through MySQL. I focused on making the booking process simple and easy to understand.",
    futureImprovements:
      "Introduce doctor profiles, real-time appointment availability, online payment integration, appointment reminders, and improved appointment management for patients and healthcare providers.",
  },
];
