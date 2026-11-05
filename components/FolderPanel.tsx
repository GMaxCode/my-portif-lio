'use client';

import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import FolderTab from '@/components/FolderTab';
import ProjectCard from '@/components/ProjectCard';
import Timeline from '@/components/Timeline';
import { portfolio } from '@/data/portfolio';
import type { FolderId } from '@/data/portfolio';

const sectionTitles: Record<FolderId, string> = {
  projetos: 'Projetos',
  experiencia: 'Experiência',
  formacao: 'Formação',
  cursos: 'Cursos',
  habilidades: 'Habilidades',
};

function About() {
  return (
    <section className="mt-14 border-t border-mint/15 pt-8">
      <p className="font-display text-[10px] uppercase tracking-[0.23em] text-sage">( Sobre mim )</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mint/70">{portfolio.about}</p>
    </section>
  );
}

function Contact() {
  return (
    <footer className="mt-12 flex flex-col gap-6 border-t border-mint/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-sage">Contato</p>
        <p className="mt-2 text-sm text-mint/70">{portfolio.contact.location}</p>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3 font-display text-[10px] uppercase tracking-[0.16em]">
        <a className="text-mint hover:text-sage" href={`mailto:${portfolio.contact.email}`}>E-mail</a>
        <a className="text-mint hover:text-sage" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn ↗</a>
        <a className="text-mint hover:text-sage" href={portfolio.contact.github} target="_blank" rel="noreferrer noopener">GitHub ↗</a>
        <a className="text-mint hover:text-sage" href={portfolio.contact.resume}>Baixar currículo ↓</a>
      </div>
    </footer>
  );
}

export default function FolderPanel({
  folderId,
  onClose,
}: {
  folderId: FolderId;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const folder = portfolio.folders.find((item) => item.id === folderId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  }, [folderId, reduceMotion]);

  const content = (() => {
    switch (folderId) {
      case 'projetos':
        return (
          <>
            <p className="max-w-2xl font-display text-xl leading-snug text-mint/80 sm:text-2xl">
              Projetos e experiências práticas em tecnologia.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 1} />
              ))}
            </div>
          </>
        );
      case 'experiencia':
        return (
          <div className="max-w-3xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-2xl leading-tight text-mint sm:text-3xl">
                {portfolio.experience.role}
              </h2>
              <span className="font-display text-[10px] uppercase tracking-[0.17em] text-sage">
                {portfolio.experience.period}
              </span>
            </div>
            <p className="mt-2 font-display text-xs uppercase tracking-[0.16em] text-mint/55">
              {portfolio.experience.company} · {portfolio.experience.location}
            </p>
            <ul className="mt-7 space-y-4">
              {portfolio.experience.responsibilities.map((item, index) => (
                <motion.li
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.45 }}
                  className="flex gap-3 text-sm leading-relaxed text-mint/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        );
      case 'formacao':
        return (
          <Timeline
            title={portfolio.education.title}
            institution={portfolio.education.institution}
            location={portfolio.education.location}
            period={portfolio.education.period}
            status={portfolio.education.status}
          />
        );
      case 'cursos':
        return (
          <ul className="divide-y divide-mint/12 border-y border-mint/12">
            {portfolio.courses.map((course, index) => (
              <motion.li
                key={course.title}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.4 }}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h2 className="font-display text-base text-mint sm:text-lg">{course.title}</h2>
                  <p className="mt-1 font-display text-[10px] uppercase tracking-[0.15em] text-mint/50">
                    {course.provider}
                  </p>
                </div>
                <span className="shrink-0 font-display text-[10px] uppercase tracking-[0.17em] text-sage">
                  {'hours' in course ? `${course.hours} · ${course.year}` : course.year}
                </span>
              </motion.li>
            ))}
          </ul>
        );
      case 'habilidades':
        return (
          <div className="grid gap-8 sm:grid-cols-2">
            {portfolio.skills.map((group, index) => (
              <motion.section
                key={group.category}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : index * 0.07, duration: 0.45 }}
              >
                <h2 className="font-display text-[10px] uppercase tracking-[0.2em] text-sage">
                  {group.category}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="rounded-full border border-mint/20 bg-mint/5 px-3.5 py-2 text-xs text-mint/85">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        );
    }
  })();

  return (
    <motion.main
      layoutId={`folder-${folderId}`}
      className="folder-panel relative mx-auto min-h-[100svh] w-full max-w-6xl px-5 pb-10 pt-12 sm:px-10 sm:pt-14"
      transition={{ layout: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } }}
    >
      <FolderTab label={sectionTitles[folderId]} onClose={onClose} />
      <div className="relative mt-8 rounded-[1.75rem] bg-forest-deep px-5 py-8 shadow-folder sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-mint/10" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.22em] text-sage">
                Arquivo · {portfolio.name}
              </p>
              <h1 className="mt-3 font-display text-3xl tracking-tight text-mint sm:text-5xl">
                {sectionTitles[folderId]}
              </h1>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-mint/30 px-4 py-2.5 font-display text-[10px] uppercase tracking-[0.16em] text-mint transition hover:border-mint hover:bg-mint/10"
            >
              ← Voltar
            </button>
          </div>
          <div className="mt-8">{content}</div>
          <About />
          <Contact />
        </div>
      </div>
      <span className="sr-only">{folder?.label}</span>
    </motion.main>
  );
}
