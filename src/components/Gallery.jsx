'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80', caption: 'Together Forever 💑' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', caption: 'Love in the Air ✨' },
  { src: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=600&q=80', caption: 'Beautiful Moments 🌹' },
  { src: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80', caption: 'Our Journey 💕' },
  { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80', caption: 'Forever & Always ❤️' },
  { src: 'https://images.unsplash.com/photo-1544476915-ed1370594142?w=600&q=80', caption: 'Sweet Memories 💖' },
];

export default function Gallery() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Our Beautiful Journey 📸
      </motion.h2>

      <div className="w-full max-w-4xl">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute bottom-4 left-4 right-4 text-white text-center text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {image.caption}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-gray-400 text-sm"
      >
        Swipe to see more memories →
      </motion.p>

      <style jsx>{`
        .swiper_container {
          padding: 40px 0;
        }
        :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.5) !important;
        }
        :global(.swiper-pagination-bullet-active) {
          background: white !important;
        }
        :global(.swiper-slide) {
          width: 300px;
          height: auto;
        }
      `}</style>
    </section>
  );
}
