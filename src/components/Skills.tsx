import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './shared/SectionTitle';
import SkillCategory from './shared/SkillCategory';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Java", level: 99 },
        { name: "Python", level: 60 },
        { name: "C", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 65 },
        { name: "FastAPI", level: 55 },
        { name: "Spring Boot", level: 95 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 96 },
        { name: "PostgreSQL", level: 90 },
        { name: "Oracle", level: 80 },
        { name: "SQL Server", level: 80 }
      ]
    },
    {
      title: "Big Data & AI",
      skills: [
        { name: "spaCy", level: 50 },
        { name: "Apache Kafka", level: 70 }      
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Jenkins", level: 90 },
        { name: "Prometheus", level: 50 },
        { name: "Grafana", level: 50 },
        { name: "Firebase", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Skills</SectionTitle>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Arabic</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Native</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">French</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Bilingual</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">English</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Advanced</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-full bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
  className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <h3 className="text-xl font-semibold mb-4">Extracurricular</h3>

  <div className="space-y-4">
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
      <h4 className="font-medium text-pink-600 dark:text-pink-400">Olympiades ENSIAS</h4>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Sponsoring & Media/Communication Manager
      </p>
    </div>

    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
      <h4 className="font-medium text-pink-600 dark:text-pink-400">ENSIAS IT Club</h4>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Competitive Programmer
      </p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Skills;