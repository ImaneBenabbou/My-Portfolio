import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: {
    title: string;
    skills: Skill[];
  };
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-pink-600 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 * i }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;