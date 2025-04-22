import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './shared/SectionTitle';
import ProjectCard from './shared/ProjectCard';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Multi-Warehouse Operations Management System",
      description: "Real-time inventory tracking system with REST API architecture for efficient warehouse management.",
      image: "/My-Portfolio/images/warehouse.jpg",
      tags: [
        "Spring Boot", "Hibernate", "UML", "MySQL",
        "HTML", "CSS", "JavaScript", "Bootstrap", "Git"
      ],
      link: "#"
    },
    {
      title: "Complaint Management Observatory",
      description: "Web & mobile platform with AI-based classification for streamlined complaint processing and resolution.",
      image: "/My-Portfolio/images/Complaint1.jpg",
      tags: [
        "Spring Boot", "React.js", "D3.js", "PostgreSQL", "MongoDB",
        "spaCy", "FastAPI", "Docker", "Kubernetes", "Firebase", "Git"
      ],
      link: "#",
      status: "Ongoing"
    },
    {
      title: "Cloud-Based Space Mission Control",
      description: "Microservices platform for real-time telemetry and 3D satellite visualization with advanced data processing capabilities.",
      image: "/My-Portfolio/images/space.jpeg",
      tags: [
        "Spring Boot", "Apache Kafka", "PostgreSQL", "MongoDB",
        "Kubernetes", "Next.js", "Three.js", "TensorFlow",
        "Apache Spark", "Jenkins", "Prometheus", "Grafana", "Git"
      ],
      link: "#",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 min-h-screen bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Projects</SectionTitle>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default Projects;