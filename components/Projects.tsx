"use client";

import { projects } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { LinkButton } from "./LinkButton";
import { CodeIcon, GitHubIcon, LinkIcon } from "./icons";

const FEATURED_TITLES = ["React GPT", "Mirro Clone", "Cotizador de Criptomonedas"];

const extendedProjects = [...projects, ...projects];

export const Projects = () => {
  const [paused, setPaused] = useState(false);
  const pauseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <div>
      <h2 className="mb-8 flex items-center gap-x-3 text-3xl font-bold text-black/80 dark:text-white md:text-4xl">
        <CodeIcon />
        Proyectos
      </h2>

      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        {/* Left fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent blur-none" />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent blur-none" />

        {/* Scrolling track */}
        <div
          className={`flex w-max gap-6 pb-4 animate-scroll ${paused ? "animate-scroll-paused" : ""}`}
          onMouseEnter={() => {
            pauseTimer.current = setTimeout(() => setPaused(true), 300);
          }}
          onMouseLeave={() => {
            if (pauseTimer.current) clearTimeout(pauseTimer.current);
            setPaused(false);
          }}
        >
          {extendedProjects.map((project, index) => (
            <article
              key={index}
              className="group flex flex-col w-[320px] md:w-[460px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-green-400/40 hover:shadow-[0_30px_80px_rgba(0,255,150,0.15)] hover:scale-[1.04] hover:-translate-y-1 hover:z-20 transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Image + overlay */}
              <div className="relative overflow-hidden h-56 md:h-64 flex-shrink-0">
                <Image
                  width={460}
                  height={256}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  src={project.image || "/placeholder.webp"}
                />
                {/* Gradient overlay — subtle always-on, stronger on hover */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Production ready badge */}
                {FEATURED_TITLES.includes(project.title) && (
                  <span className="absolute top-3 right-3 z-10 text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full border border-green-400/20 backdrop-blur-sm">
                    Production ready
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Tech badges */}
                <ul className="flex flex-row flex-wrap gap-1.5">
                  {(project.tags ?? []).map((tag: any, i: number) => (
                    <li key={i}>
                      <span className="flex items-center gap-x-1.5 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:border-green-400/40 transition text-gray-700 dark:text-white/70">
                        {tag.icon}
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-600 dark:text-white/70 line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  <LinkButton href={project.github}>
                    <GitHubIcon />
                    {project?.backendRepo && project.backendRepo.length > 0
                      ? "Frontend"
                      : "Code"}
                  </LinkButton>
                  {project?.backendRepo && project.backendRepo.length > 0 && (
                    <LinkButton href={project.backendRepo ?? ""}>
                      <GitHubIcon /> Backend
                    </LinkButton>
                  )}
                  {project.link.length > 0 && (
                    <LinkButton href={project.link}>
                      <LinkIcon /> Preview
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
