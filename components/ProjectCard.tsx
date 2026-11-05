'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { portfolio } from '@/data/portfolio';

type Project = (typeof portfolio.projects)[number] & { featured?: boolean };

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;
    closeButton.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  function closeDetails() {
    setIsOpen(false);
    window.requestAnimationFrame(() => openButton.current?.focus());
  }

  return (
    <>
      <motion.article
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.5 }}
        className={`group flex h-full flex-col rounded-3xl border p-6 transition-colors sm:p-7 ${
          project.featured
            ? 'border-sage/45 bg-forest-ink sm:col-span-2 lg:col-span-2'
            : 'border-mint/15 bg-forest hover:border-sage/50'
        }`}
      >
        <p className="font-display text-[10px] uppercase tracking-[0.25em] text-sage">
          {project.featured ? 'Projeto em destaque' : `Projeto 0${index}`}
        </p>
        <h3 className="mt-4 font-display text-xl leading-snug tracking-tight text-mint sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mint/70">{project.description}</p>
        <ul aria-label="Tecnologias e temas" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-mint/20 px-3 py-1 font-display text-[10px] uppercase tracking-[0.1em] text-mint/85">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            ref={openButton}
            type="button"
            onClick={() => setIsOpen(true)}
            className="font-display text-[10px] font-medium uppercase tracking-[0.18em] text-mint underline decoration-sage/50 underline-offset-4 hover:decoration-mint"
          >
            Ver detalhes
          </button>
          <a
            href="https://github.com/GMaxCode"
            target="_blank"
            rel="noreferrer noopener"
            className="font-display text-[10px] font-medium uppercase tracking-[0.18em] text-sage hover:text-mint"
          >
            Ver no GitHub ↗
          </a>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDetails();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-title-${index}`}
              className="project-modal"
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.24 }}
            >
              <button
                ref={closeButton}
                type="button"
                onClick={closeDetails}
                aria-label="Fechar detalhes"
                className="absolute right-5 top-5 rounded-full border border-mint/25 px-3 py-2 font-display text-xs text-mint hover:bg-mint/10"
              >
                Fechar <span aria-hidden="true">×</span>
              </button>
              <p className="font-display text-[10px] uppercase tracking-[0.25em] text-sage">
                Detalhes do projeto
              </p>
              <h2 id={`project-title-${index}`} className="mt-5 max-w-2xl pr-16 font-display text-2xl leading-tight text-mint sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mint/75 sm:text-base">
                {project.description}
              </p>
              <a
                href="https://github.com/GMaxCode"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex rounded-full bg-mint px-5 py-3 font-display text-[10px] font-medium uppercase tracking-[0.17em] text-ink hover:bg-sage"
              >
                Ver no GitHub ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
