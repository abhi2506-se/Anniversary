'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Message() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-6xl">💌</span>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 bg-clip-text text-transparent"
        >
          A Message From The Heart
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-3xl" />
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <TypeAnimation
              sequence={[
                'Dear Mama & Mami...',
                1500,
                'On this beautiful day, 9 years of love...',
                1500,
                'You two inspire me every day...',
                1500,
                'Your bond is a testament to true love...',
                1500,
                'Here is to many more years of happiness...',
                1500,
                'I love you both more than words can say! ❤️',
                3000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-2xl text-gray-200 leading-relaxed"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="mt-8 text-4xl"
            >
              💕
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex justify-center gap-8 text-center"
        >
          <div className="glass-card p-6 rounded-2xl">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-4xl mb-2"
            >
              💑
            </motion.div>
            <p className="text-gray-400 text-sm">9 Years</p>
            <p className="text-white font-semibold">Together</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl mb-2">❤️</div>
            <p className="text-gray-400 text-sm">Infinite</p>
            <p className="text-white font-semibold">Love</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-4xl mb-2">✨</div>
            <p className="text-gray-400 text-sm">Endless</p>
            <p className="text-white font-semibold">Memories</p>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
