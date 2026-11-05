'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import type { FolderId } from '@/data/portfolio';

function Flower() {
  return (
    <svg viewBox="0 0 100 100" className="flower-rotate h-12 w-12 text-mint sm:h-14 sm:w-14" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="27"
          rx="12.5"
          ry="23"
          transform={`rotate(${angle} 50 50)`}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

export default function Cover({ onOpen }: { onOpen: (id: FolderId) => void }) {
  const reduceMotion = useReducedMotion();
  const cursorX = useSpring(useMotionValue(-20), { stiffness: 260, damping: 24 });
  const cursorY = useSpring(useMotionValue(-20), { stiffness: 260, damping: 24 });
  const parallaxX = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const parallaxY = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const lastFolder = portfolio.folders.length - 1;

  function movePointer(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse') return;
    cursorX.set(event.clientX - 5);
    cursorY.set(event.clientY - 5);

    if (!reduceMotion) {
      const bounds = event.currentTarget.getBoundingClientRect();
      parallaxX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -5);
      parallaxY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
    }
  }

  function resetPointer() {
    cursorX.set(-20);
    cursorY.set(-20);
    parallaxX.set(0);
    parallaxY.set(0);
  }

  return (
    <motion.header
      layoutId="portfolio-cover"
      onPointerMove={movePointer}
      onPointerLeave={resetPointer}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-7 pt-8 sm:px-10 sm:pt-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sage/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <motion.div className="folder-stack" style={{ x: parallaxX, y: parallaxY }}>
          {portfolio.folders.map((folder, index) => (
            <motion.div
              key={folder.id}
              layoutId={`folder-${folder.id}`}
              initial={reduceMotion ? false : { x: -56, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: reduceMotion ? 0 : 0.12 + index * 0.09,
                duration: reduceMotion ? 0 : 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -7, scale: 1.005 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              onClick={() => onOpen(folder.id)}
              className={`folder-band ${folder.tone === 'beige' ? 'bg-beige' : 'bg-sage'}`}
              style={{
                left: `calc(var(--band-left) * ${index})`,
                top: `calc(var(--band-step) * ${lastFolder - index})`,
                width: `calc(100% - var(--band-left) * ${index})`,
                zIndex: 10 + lastFolder - index,
                pointerEvents: 'none',
              }}
            >
              <motion.button
                type="button"
                aria-label={`Abrir pasta ${folder.label}`}
                onClick={() => onOpen(folder.id)}
                className={`folder-tab ${folder.tone === 'beige' ? 'bg-beige' : 'bg-sage'}`}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                ( {folder.label} )
              </motion.button>
            </motion.div>
          ))}

          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.7 }}
            className="folder-tab folder-year bg-forest-ink text-mint"
          >
            ( 2026 )
          </motion.span>
        </motion.div>

        <div className="mt-10 flex items-end justify-between gap-6 sm:mt-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: -22, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.55, duration: 0.8 }}
          >
            <Flower />
          </motion.div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.65, duration: 0.65 }}
            className="max-w-[16rem] text-right font-display text-[10px] font-medium uppercase leading-[1.7] tracking-[0.16em] text-white/90 sm:text-xs"
          >
            {portfolio.cover.study}
            <br />
            {portfolio.cover.fields}
          </motion.p>
        </div>

        <div className="mt-9 flex flex-1 flex-col justify-end pb-7 sm:mt-12 sm:pb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? false : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.22, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(4rem,16vw,9.5rem)] font-medium leading-[0.83] tracking-[-0.06em] text-mint"
            >
              Port<span className="font-light italic">fólio</span>
            </motion.h1>
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.55, duration: 0.75 }}
            className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="font-display text-xl tracking-tight text-white/95 sm:text-2xl">
                {portfolio.name}
              </p>
              <p className="mt-1 font-display text-[11px] font-medium uppercase tracking-[0.28em] text-sage sm:text-xs">
                {portfolio.role}
              </p>
            </div>
            <nav aria-label="Contato" className="flex flex-wrap gap-x-5 gap-y-2 font-display text-[10px] uppercase tracking-[0.2em] text-mint/70">
              <a className="hover:text-mint" href={portfolio.contact.github} target="_blank" rel="noreferrer noopener">GitHub</a>
              <a className="hover:text-mint" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
              <a className="hover:text-mint" href={`mailto:${portfolio.contact.email}`}>E-mail</a>
            </nav>
          </motion.div>
        </div>
      </div>

      <motion.span
        aria-hidden="true"
        className="portfolio-cursor hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
    </motion.header>
  );
}
