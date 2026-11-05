'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function FolderTab({
  label,
  onClose,
}: {
  label: string;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClose}
      className="folder-tab panel-tab bg-beige text-ink"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      aria-label={`Voltar da pasta ${label}`}
    >
      ( {label} )
    </motion.button>
  );
}
