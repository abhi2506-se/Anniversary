'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Surprise() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [hearts, setHearts] = useState([]);

  const shootConfetti = useCallback(() => {
    const count = 200;

    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const createFloatingHearts = useCallback(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 30,
    }));
    setHearts(newHearts);
    setShowSurprise(true);
    shootConfetti();

    setTimeout(() => {
      shootConfetti();
      setTimeout(() => shootConfetti(), 300);
    }, 1000);
  }, [shootConfetti]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
      >
        The Final Surprise! 🎁
      </motion.h2>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: '100vh', x: `${heart.x}vw` }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: '-100vh',
              rotate: 360,
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: 'linear',
            }}
            className="absolute text-pink-500 pointer-events-none"
            style={{ fontSize: `${heart.size}px` }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        className="text-8xl md:text-9xl mb-8 cursor-pointer"
        onClick={shootConfetti}
      >
        💖
      </motion.div>

      <motion.button
        onClick={createFloatingHearts}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xl font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all"
      >
        ✨ Celebrate Love ✨
      </motion.button>

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-2xl text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8">
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-xl md:text-2xl text-gray-200"
                >
                  Happy 9th Anniversary to the most beautiful couple! 💕
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-gray-400"
                >
                  May your love continue to grow stronger with each passing day.
                  Here's to many more adventures together! 🎉
                </motion.p>

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: 360,
                  }}
                  transition={{
                    scale: { repeat: Infinity, duration: 1.5 },
                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  }}
                  className="mt-6 text-5xl"
                >
                  🎊
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        Tap the heart or button to celebrate! 🎉
      </motion.div>
    </section>
  );
}
