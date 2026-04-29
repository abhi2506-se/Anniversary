'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, window?.innerHeight + 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute text-pink-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 25}px`,
            }}
          >
            {['✨', '💕', '❤️', '💖', '🌸'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 blur-3xl scale-150" />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          className="relative text-8xl md:text-9xl mb-8"
        >
          💑
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Happy 9th Anniversary
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-2xl md:text-4xl text-gray-300 mb-8"
      >
        Mama & Mami 💕
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-2xl"
      >
        <TypeAnimation
          sequence={[
            '9 Years of Love ❤️',
            2000,
            'A Journey of Togetherness 💑',
            2000,
            'Forever & Always ✨',
            2000,
            'Made for Each Other 💕',
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-400"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10"
      >
        <p className="text-gray-500 text-sm">↓ Scroll to explore</p>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </section>
  );
}
