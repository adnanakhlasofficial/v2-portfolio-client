'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative min-h-screen overflow-hidden">
        {/* --- Transition Overlay --- */}
        <motion.div
          key={`overlay-${pathname}`}
          initial={{ y: '100%' }}
          animate={{ y: ['100%', '0%', '-100%'] }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-br from-primary via-primary/70 to-background shadow-2xl"
        />

        {/* --- Light streak accent (subtle aesthetic effect) --- */}
        <motion.div
          initial={{ opacity: 0, x: '-30%' }}
          animate={{ opacity: [0, 0.3, 0], x: ['-30%', '100%', '120%'] }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl"
        />

        {/* --- Page content --- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
