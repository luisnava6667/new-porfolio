"use client";
import React from "react";
import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { DocumentIcon, GitHubIcon, LinkedinIcon } from "./icons";

export const Hero = () => {
  return (
    <div className="max-w-full relative">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl" />
      </div>
      <div className="grid gap-4 mb-4">
        <div className="flex items-center justify-between gap-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-white">
            Construyo productos SaaS rápidos, escalables y pensados para crecer.
          </h1>
          <Image
            src="/hero.webp"
            alt="Luis Navarro"
            width={175}
            height={175}
            className="rounded-full shrink-0 hidden md:block"
          />
        </div>
        <div className="grid space-y-3">
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Frontend Developer especializado en{" "}
            <strong className="dark:text-green-400/90 font-semibold text-green-700">
              React, Next.js y optimización de performance
            </strong>{" "}
            en aplicaciones reales.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            +3 años construyendo productos en producción · UX + performance + escalabilidad
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <LinkButton
              href="https://www.linkedin.com/in/luis-navarro-282858243"
              variant="primary"
            >
              <LinkedinIcon />
              LinkedIn
            </LinkButton>
            <LinkButton href="https://github.com/luisr-nava">
              <GitHubIcon />
              GitHub
            </LinkButton>
            <LinkButton href="/LuisNavarro_FrontendDev.pdf" download={true}>
              <DocumentIcon />
              Mi CV
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
