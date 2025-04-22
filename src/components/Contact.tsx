import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionTitle from './shared/SectionTitle';

const Contact: React.FC = () => {

  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="flex items-start space-x-4 mt-8">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-pink-600 dark:text-pink-400 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:benabbouimane04@gmail.com" 
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  benabbouimane04@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded-lg text-pink-600 dark:text-pink-400 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Rabat, Morocco
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <p className="font-medium">Connect with me:</p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/ImaneBenabbou" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/imane-benabbou-2bb152286/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
              


              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center justify-center">
           <img
            src="/images/imane.png"
            alt="Contact illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
            />
          </motion.div>

            
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;