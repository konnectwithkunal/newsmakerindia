import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero({ setNavbarTransparent }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setNavbarTransparent(true);
        } else {
          setNavbarTransparent(false);
        }
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px'
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setNavbarTransparent]);

  return (
    <div
      ref={videoRef}
      className="w-full h-screen overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <motion.section
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <video
          src="/video/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none select-none block"
          tabIndex={-1}
        />
      </motion.section>
    </div>
  );
}

export default Hero;
