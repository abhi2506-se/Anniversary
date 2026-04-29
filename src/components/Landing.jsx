'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Landing({ onEnter }) {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setShowWelcome(true), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#db7093', '#c71585', '#ffb6c1'],
    });

    setTimeout(() => {
      onEnter();
    }, 500);
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-7xl mb-6"
            >
              💖
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl text-pink-400 font-light tracking-widest"
            >
              Loading Love...
            </motion.p>
            <motion.div className="mt-6 flex justify-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="w-2 h-2 bg-pink-500 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {showWelcome && !showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-black via-purple-950/50 to-black"
          >
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: Math.random() * window?.innerHeight || 800,
                    x: Math.random() * window?.innerWidth || 400,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -100,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                  className="absolute text-pink-400/30"
                  style={{
                    fontSize: `${20 + Math.random() * 20}px`,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            <div className="text-center z-10 px-6">
              <motion.div
                initial={{ scale: 0, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3,
                }}
                className="mb-8"
              >
                <span className="text-8xl">🎉</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Happy 9th Anniversary
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-300 mb-2"
              >
                Mama & Mami
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-5xl mt-4 mb-8"
              >
                💕
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full text-xl font-bold shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all animate-pulse"
              >
                Enter 💖
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="mt-8 text-gray-500 text-sm"
              >
                A celebration of love →
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
