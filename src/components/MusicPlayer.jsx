'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById('background-music');
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio id="background-music" loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
          transition={{ repeat: isPlaying ? Infinity : 0, duration: 1 }}
        >
          {isPlaying ? (
            <FaHeart className="text-pink-500 text-2xl" />
          ) : (
            <FaHeartBroken className="text-gray-400 text-2xl" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-24 right-6 z-50 p-4 rounded-xl backdrop-blur-md bg-pink-500/30 border border-pink-400/30 max-w-xs"
          >
            <p className="text-sm text-white/90">
              {isPlaying ? '🎵 Music Playing...' : '🔇 Music Paused'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
