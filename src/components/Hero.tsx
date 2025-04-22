import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Side */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 text-sm font-medium">
                Software Engineering Student
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                Imane BENABBOU
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Software Engineering Student at ENSIAS.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-medium transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors duration-300"
              >
                View Projects
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:benabbouimane04@gmail.com"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Mail size={18} /> benabbouimane04@gmail.com
              </a>
              <a
                href="tel:+212612599235"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Phone size={18} /> +212 6 12 59 92 35
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/ImaneBenabbou"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/imane-benabbou-2bb152286"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <img
              src="/images/portfolio.png"
              alt="Imane Benabbou"
              className="w-72 h-72 rounded-full object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;