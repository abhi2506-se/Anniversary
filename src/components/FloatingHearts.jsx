'use client';

import { motion } from 'framer-motion';

const hearts = [
  '💕', '💖', '💗', '💓', '💝', '💘', '❤️', '💜', '🩷', '🧡',
];

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: 0,
            x: `${5 + Math.random() * 90}%`,
            y: '110%',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: '-20%',
            x: `${5 + Math.random() * 90 + (Math.random() - 0.5) * 20}%`,
            rotate: Math.random() > 0.5 ? 360 : -360,
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            fontSize: `${15 + Math.random() * 25}px`,
          }}
        >
          {hearts[Math.floor(Math.random() * hearts.length)]}
        </motion.div>
      ))}
    </div>
  );
}
