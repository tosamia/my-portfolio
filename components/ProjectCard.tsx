
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="project-cover"
          />
        ) : (
          <div className="project-image-placeholder">
            <span>✳</span>
            <p>{project.name}</p>
            <small>PROJECT PREVIEW</small>
          </div>
        )}
        <span className="project-image-label">
          PROJECT / {project.slug.toUpperCase()}
        </span>
      </div>

      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span>↗</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link href={`/projects/${project.slug}`}>
            View Details <span>→</span>
          </Link>

          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              Live Website ↗
            </a>
          )}

          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
