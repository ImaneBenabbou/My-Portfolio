import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import SectionTitle from './shared/SectionTitle';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Work Experience</SectionTitle>
        
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            variants={itemVariants}
            className="relative border-l-2 border-pink-200 dark:border-pink-900 pl-8 pb-8 ml-4"
          >
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-900">
              <Briefcase size={16} className="text-pink-600 dark:text-pink-400" />
            </span>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                  <p className="text-pink-600 dark:text-pink-400 font-medium">Visiativ Africa</p>
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 rounded-full">
                  June – July 2024
                </span>
              </div>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                  <p>Developed an intranet platform to digitize 3 core HR processes</p>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                  <p>Built automated applications (Leave Request, Certificates, Travel Orders)</p>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/40 flex items-center justify-center text-pink-600 dark:text-pink-400 mr-3 mt-0.5 flex-shrink-0">•</span>
                  <p>Used Moovapps (Low Code/No Code BPM workflows)</p>
                </li>
              </ul>
              
              <div className="mt-4">
                <span className="text-sm font-medium">Key achievements:</span>
                <p className="mt-1 text-gray-700 dark:text-gray-300">Successfully reduced manual HR processes by 70%, improving departmental efficiency and employee satisfaction.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;