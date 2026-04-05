import { ExperienceItemProps } from "@/types";
import Link from "next/link";
import { CalendarIcon } from "./icons";

export const ExperienceItem = ({
  description,
  date,
  link,
  tecnology,
  title,
  softSkills,
}: ExperienceItemProps) => {
  const bulletLines = description.includes("\n")
    ? description.split("\n").filter(Boolean)
    : null;

  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full -start-3 ring-8 ring-emerald-500 dark:ring-emerald-500 dark:bg-emerald-700">
        <CalendarIcon />
      </span>
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-green-400/40 transition-all">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <time className="block mb-3 text-sm font-bold leading-none text-emerald-700 dark:text-emerald-300">
          {date}
        </time>
        {bulletLines ? (
          <ul className="mb-4 space-y-1.5">
            {bulletLines.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-base font-normal text-gray-700 dark:text-gray-300"
              >
                <span className="mt-1 text-green-400 shrink-0">•</span>
                <span>{line.replace(/^[•\-]\s*/, "")}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
            {description}
          </p>
        )}
        {tecnology && (
          <p className="text-sm font-bold text-gray-600 dark:text-white mb-3">
            <strong className="font-bold text-emerald-700 dark:text-emerald-300">
              Tecnologías:{" "}
            </strong>
            {tecnology}
          </p>
        )}
        {link && (
          <Link
            target="_blank"
            href={link}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:text-green-400 transition-all dark:text-white text-gray-900"
          >
            Ver Más
          </Link>
        )}
      </div>
    </li>
  );
};
