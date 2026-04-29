'use client';

import { useState } from 'react';
import Landing from '@/components/Landing';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Message from '@/components/Message';
import Surprise from '@/components/Surprise';
import NightSky from '@/components/NightSky';
import FloatingHearts from '@/components/FloatingHearts';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <NightSky />
      <FloatingHearts />

      {!started && <Landing onEnter={() => setStarted(true)} />}

      {started && (
        <>
          <Hero />
          <Gallery />
          <Message />
          <Surprise />
          <MusicPlayer />

          <footer className="py-8 text-center text-gray-500 text-sm">
            <p>Made with ❤️ for Mama & Mami</p>
            <p className="mt-2">Happy 9th Anniversary! 🎉</p>
          </footer>
        </>
      )}
    </main>
  );
}
