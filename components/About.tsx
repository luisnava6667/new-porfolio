import Image from "next/image";
import React from "react";
import { UserCheckIcon } from "./icons";

export const About = () => {
  return (
    <article className=" text-gray-700 dark:text-gray-300 md:flex-row">
      <h2 className="flex items-center mb-14 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white ">
        <UserCheckIcon />
        Sobre mí
      </h2>
      <div className="md:flex grid md:gap-5 justify-items-center items-center">
        <div className="items-center mb-10 md:mt-0 w-1/2 grid justify-items-center">
          <Image
            src="/me.png"
            alt="Luis Navarro Frontend Developer React Next.js Buenos Aires"
            height={700}
            width={700}
            className="w-72 h-72 rotate-6 transition-all duration-300 rounded-lg shadow-xl justify-items-center"
          />
        </div>
        <div className="[&>p]:mb-4 font-medium text-base text-pretty md:w-1/2">
          <p>
            Soy desarrollador enfocado en construir productos reales, no solo
            código.
          </p>
          <p>
            Trabajo en interfaces complejas, performance y experiencia de
            usuario en SaaS.
          </p>
          <p>
            Me interesa crear soluciones que impacten en el negocio y escalen en
            el tiempo.
          </p>
        </div>
      </div>
    </article>
  );
};
