'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Timeline({
  title,
  institution,
  location,
  period,
  status,
}: {
  title: string;
  institution: string;
  location: string;
  period: string;
  status: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="relative ml-2 border-l border-mint/25 pl-7 sm:ml-4 sm:pl-10">
      <motion.li
        initial={reduceMotion ? false : { opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.5 }}
        className="relative"
      >
        <span
          aria-hidden="true"
          className="absolute -left-[2.12rem] top-1 h-3 w-3 rounded-full bg-mint ring-4 ring-forest-deep sm:-left-[2.62rem]"
        />
        <span className="inline-flex rounded-full bg-sage/15 px-3 py-1 font-display text-[10px] uppercase tracking-[0.16em] text-sage">
          {status}
        </span>
        <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-mint sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 font-display text-sm text-mint/80">{institution}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-display text-[10px] uppercase tracking-[0.17em] text-mint/55">
          <span>{location}</span>
          <span>{period}</span>
        </div>
      </motion.li>
    </ol>
  );
}
