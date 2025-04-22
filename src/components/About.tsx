import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './shared/SectionTitle';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a software engineering student at ENSIAS in Rabat, Morocco, with a deep curiosity for how technology can improve our everyday lives. What started as a simple interest in coding quickly turned into a passion for building things that are not just functional, but meaningful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I genuinely enjoy the process of bringing ideas to life—whether it's writing backend logic or designing user interfaces. There's something really satisfying about solving a problem and seeing everything come together.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Beyond the code, I’m someone who enjoys the process — the late nights, the learning curves, and the small wins that come with building something you're proud of.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-pink-600 dark:text-pink-400 mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">ENSIAS</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023 – 2026</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Engineering Degree in Software Engineering
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-pink-600 dark:text-pink-400 mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Preparatory Classes</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021 – 2023</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      MPSI/MP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;