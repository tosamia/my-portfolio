
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Target,
} from "lucide-react";

import { projects } from "@/data/projects";

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <main className="min-h-screen bg-[#17131B] text-[#F5F2F5]">

      {/* =========================================
          PROJECT HEADER
      ========================================= */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:px-10">

        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="max-w-4xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Project Case Study
            </p>
          </div>

          <h1 className="mb-7 text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {project.name}
          </h1>

          <p className="max-w-3xl text-base leading-8 text-white/60 md:text-lg">
            {project.description}
          </p>

          {/* Project Actions */}
          <div className="mt-9 flex flex-wrap gap-4">

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5F2F5] px-6 py-3 text-sm font-medium text-[#17131B] transition hover:bg-white"
              >
                View Live Project
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/5"
              >
                <GitBranch size={17} />
                View Source Code
                <ExternalLink size={15} />
              </a>
            )}

          </div>

        </div>

      </section>

      {/* =========================================
          PROJECT COVER
      ========================================= */}
      {project.image && (
        <section className="mx-auto max-w-6xl px-6 md:px-10">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#211B27]">

            <Image
              src={project.image}
              alt={`${project.name} project preview`}
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />

          </div>

        </section>
      )}

      {/* =========================================
          MAIN PROJECT CONTENT
      ========================================= */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_300px]">

          {/* LEFT CONTENT */}
          <div className="space-y-20">

            {/* -------------------------------------
                PROJECT OVERVIEW
            ------------------------------------- */}
            <section>

              <div className="mb-5 flex items-center gap-3">

                <Target size={18} className="text-white/50" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  01 / Overview
                </p>

              </div>

              <h2 className="mb-7 text-3xl font-medium tracking-tight md:text-4xl">
                Project Goal & Overview
              </h2>

              <div className="rounded-2xl border border-white/10 bg-[#211B27]/60 p-6 md:p-8">

                <p className="text-base leading-8 text-white/65">
                  {project.description}
                </p>

              </div>

            </section>

            {/* -------------------------------------
                CHALLENGES
            ------------------------------------- */}
            <section>

              <div className="mb-5 flex items-center gap-3">

                <Code2 size={18} className="text-white/50" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  02 / Development
                </p>

              </div>

              <h2 className="mb-7 text-3xl font-medium tracking-tight md:text-4xl">
                Challenges & Problem Solving
              </h2>

              <div className="rounded-2xl border border-white/10 bg-[#211B27]/60 p-6 md:p-8">

                <p className="text-base leading-8 text-white/65">
                  {project.challenges}
                </p>

              </div>

            </section>

            {/* -------------------------------------
                FUTURE IMPROVEMENTS
            ------------------------------------- */}
            <section>

              <div className="mb-5 flex items-center gap-3">

                <Lightbulb size={18} className="text-white/50" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  03 / What's Next
                </p>

              </div>

              <h2 className="mb-7 text-3xl font-medium tracking-tight md:text-4xl">
                Future Improvements
              </h2>

              <div className="rounded-2xl border border-white/10 bg-[#211B27]/60 p-6 md:p-8">

                <p className="text-base leading-8 text-white/65">
                  {project.futureImprovements}
                </p>

              </div>

            </section>

          </div>

          {/* =====================================
              RIGHT SIDEBAR
          ===================================== */}
          <aside className="space-y-8">

            {/* TECHNOLOGIES */}
            <section className="rounded-2xl border border-white/10 bg-[#211B27] p-7">

              <div className="mb-6 flex items-center gap-3">

                <Code2 size={20} className="text-white/60" />

                <h3 className="text-lg font-medium">
                  Technologies
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {technologies.length > 0 ? (
                  technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                    >
                      {technology}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-white/40">
                    Technology details coming soon.
                  </p>
                )}

              </div>

            </section>

            {/* PROJECT INFORMATION */}
            <section className="rounded-2xl border border-white/10 bg-[#211B27] p-7">

              <h3 className="mb-7 text-lg font-medium">
                Project Information
              </h3>

              <div className="space-y-6">

                {/* Project Name */}
                <div>

                  <p className="mb-2 text-xs uppercase tracking-wider text-white/35">
                    Project Name
                  </p>

                  <p className="text-sm text-white/75">
                    {project.name}
                  </p>

                </div>

                {/* Project Type */}
                <div>

                  <p className="mb-2 text-xs uppercase tracking-wider text-white/35">
                    Project Type
                  </p>

                  <p className="text-sm text-white/75">
                    Web Application
                  </p>

                </div>

                {/* Live Website */}
                {project.liveLink && (
                  <div>

                    <p className="mb-2 text-xs uppercase tracking-wider text-white/35">
                      Live Website
                    </p>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 break-all text-sm text-white/70 transition hover:text-white"
                    >
                      Visit Project
                      <ArrowUpRight size={15} />
                    </a>

                  </div>
                )}

                {/* GitHub */}
                {project.githubLink && (
                  <div>

                    <p className="mb-2 text-xs uppercase tracking-wider text-white/35">
                      Repository
                    </p>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                    >
                      GitHub Repository
                      <ExternalLink size={15} />
                    </a>

                  </div>
                )}

              </div>

            </section>

            {/* QUICK TECHNOLOGY SUMMARY */}
            <section className="rounded-2xl border border-white/10 bg-[#211B27] p-7">

              <div className="mb-4 flex items-center gap-3">

                <Lightbulb size={18} className="text-white/50" />

                <h3 className="text-lg font-medium">
                  Built With Purpose
                </h3>

              </div>

              <p className="text-sm leading-7 text-white/50">
                Every project is an opportunity to solve problems,
                strengthen technical skills, and turn ideas into
                functional applications.
              </p>

            </section>

          </aside>

        </div>

      </section>

      {/* =========================================
          PROJECT GALLERY
      ========================================= */}
      {project.image && (
        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">

          <div className="mb-10">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-white/30" />

              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                04 / Visual Showcase
              </p>

            </div>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Project Gallery
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45">
              A closer look at the interface and design of {project.name}.
            </p>

          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#211B27]">

            <Image
              src={project.image}
              alt={`${project.name} interface screenshot`}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
            />

          </div>

          <p className="mt-4 text-sm text-white/35">
            {project.name} — Application Preview
          </p>

        </section>
      )}

      {/* =========================================
          BOTTOM CTA
      ========================================= */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-white/30" />

                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Explore More
                </p>

              </div>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                More projects,
                <br />
                more ideas.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                Explore more projects, experiments, and ideas
                from my development journey.
              </p>

            </div>

            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm transition hover:bg-white hover:text-[#17131B]"
            >
              Explore All Projects
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
