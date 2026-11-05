'use client';

import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Cover from '@/components/Cover';
import FolderPanel from '@/components/FolderPanel';
import type { FolderId } from '@/data/portfolio';

export default function Page() {
  const [activeFolder, setActiveFolder] = useState<FolderId | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence initial={false}>
        {activeFolder ? (
          <FolderPanel
            key={activeFolder}
            folderId={activeFolder}
            onClose={() => setActiveFolder(null)}
          />
        ) : (
          <motion.div
            key="cover"
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          >
            <Cover onOpen={setActiveFolder} />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
