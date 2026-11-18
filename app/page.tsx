
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: "javascript/F7DF1E" },
      { name: "TypeScript", logo: "typescript/3178C6" },
      { name: "HTML5", logo: "html5/E34F26" },
      { name: "CSS3", logo: "css3/1572B6" },
      { name: "PHP", logo: "php/777BB4" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "react/61DAFB" },
      { name: "Next.js", logo: "nextdotjs/000000" },
      { name: "Tailwind CSS", logo: "tailwindcss/06B6D4" },
      { name: "Responsive Design", logo: "figma/F24E1E" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "nodedotjs/339933" },
      { name: "Express.js", logo: "express/000000" },
      { name: "REST API", logo: "postman/FF6C37" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", logo: "mysql/4479A1" },
      { name: "Git", logo: "git/F05032" },
      { name: "GitHub", logo: "github/181717" },
      { name: "VS Code", logo: "visualstudiocode/007ACC" },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section id="home" className="intro-section page-container">
        <div className="intro-copy">
          <p className="eyebrow"><span /> HELLO, I'M</p>

          <h1>
            Samia <span>Rahman.</span>
          </h1>

          <h2>
            Computer Science Student
            <span className="role-divider"> | </span>
            Web Developer
          </h2>

          <p className="intro-tagline">
            Turning ideas into meaningful digital experiences.
          </p>

          <p className="intro-description">
            I'm a Computer Science and Engineering student passionate about
            full-stack web development, problem-solving, and creating practical
            digital experiences. I enjoy turning ideas into useful and
            responsive applications while continuously learning new
            technologies.
          </p>

          <div className="intro-socials">
            <a
              href="https://www.linkedin.com/in/samia-rahmann/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn profile"
              title="LinkedIn"
              className="social-icon-link linkedin-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>

            <a
              href="https://github.com/tosamia"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
              title="GitHub"
              className="social-icon-link github-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="mailto:samiasamian2003@gmail.com"
              className="social-icon-link email-link"
              aria-label="Send me an email"
            >
              <span className="email-symbol">@</span>
              Email
              <span className="social-arrow">↗</span>
            </a>
          </div>

          <div className="intro-actions">
            <a href="#contact" className="resume-button">
              <span className="resume-icon">↓</span>
              Resume / CV
              <span className="resume-arrow">↗</span>
            </a>

            <a href="#projects" className="hero-text-link">
              Explore my work <span>↗</span>
            </a>
          </div>
        </div>

        <div className="intro-visual">
          <div className="portrait-frame">
            <Image
              src="/samia-profile.png"
              alt="Samia Rahman"
              fill
              priority
              sizes="(max-width: 700px) 250px, 390px"
              className="portrait-image"
            />
          </div>

          <div className="portrait-note">
            <span>✳</span>
            <div>
              <strong>Curious by nature</strong>
              <small>Creative in everything I do</small>
            </div>
          </div>

          <div className="portrait-decoration" />
        </div>

        <div className="hero-side-label">CREATIVE MIND · DEVELOPER</div>
      </section>

      <section id="about" className="section-block about-block">
        <div className="page-container two-column-section">
          <div className="section-title-area">
            <p className="section-eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2>More than just <span>code.</span></h2>
          </div>

          <div className="about-copy">
            <p>
              I’m a Computer Science and Engineering (CSE) student with a
              strong interest in full-stack web development and
              problem-solving. I enjoy transforming ideas into practical
              applications and exploring how technology can solve everyday
              challenges.
            </p>

            <p>
              Outside coding, I value continuous learning, collaboration,
              and exploring ideas that help me grow as a developer. I am also
              interested in designing, painting, and gardening.
            </p>

            <div className="interest-tags">
              <span>Designing</span>
              <span>Painting</span>
              <span>Gardening</span>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-block skills-block">
        <div className="page-container">
          <div className="section-heading">
            <p className="section-eyebrow">02 / MY ARSENAL</p>
            <h2>Technical <span>Skills</span></h2>
            <p>
              Technologies and tools I use while learning and building
              web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-top">
                  <span>0{index + 1}</span>
                  <span>✳</span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <img
                        src={`https://cdn.simpleicons.org/${skill.logo}`}
                        alt=""
                        className="skill-logo"
                        loading="lazy"
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block page-container">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-eyebrow">03 / SELECTED WORK</p>
            <h2>Projects I've <span>worked on.</span></h2>
            <p>
              A selection of academic and personal projects where I turn
              ideas into working applications.
            </p>
          </div>

          <a
            href="https://github.com/tosamia?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="all-repositories"
          >
            All GitHub Repositories ↗
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="education" className="section-block education-block">
        <div className="page-container two-column-section">
          <div className="section-title-area">
            <p className="section-eyebrow">04 / ACADEMIC JOURNEY</p>
            <h2>My <span>Education</span></h2>
          </div>

          <div className="education-entry">
            <p className="education-label">UNDERGRADUATE STUDIES</p>
            <h3>Bachelor of Science in Computer Science & Engineering</h3>
            <p>Sylhet Engineering College</p>
            <span className="education-status">Currently pursuing</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="page-container contact-content">
          <p className="section-eyebrow">05 / REACH OUT</p>
          <h2>Let's connect and <span>create.</span></h2>
          <p>
            I'm always interested in learning, collaborating on ideas,
            connecting with developers, and exploring new opportunities.
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:samiasamian2003@gmail.com"
          >
            Get in Touch <span>↗</span>
          </a>

          <div className="contact-meta">
            <a href="mailto:samiasamian2003@gmail.com">
              samiasamian2003@gmail.com
            </a>
            <a href="https://github.com/tosamia" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/samia-rahmann/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
