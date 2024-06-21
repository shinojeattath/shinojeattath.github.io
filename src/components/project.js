import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const ProjectsPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      title: "Leave Management System",
      description: "A comprehensive Leave Management System for college administration, streamlining the process of leave applications, approvals, and tracking, resulting in improved efficiency and transparency.",
      image: "/img/projects/leave1.png",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
      title: "Travel Together",
      description: "A dynamic travel website, enabling seamless booking, itinerary management, and personalized user experiences.",
      image: "/img/projects/travel_together.png",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
      title: "Gesture Controlled System",
      description: "a real-time gesture recognition system using OpenCV, enabling users to control volume, brightness, and capture screenshots through hand gestures. Implemented computer vision algorithms for accurate gesture detection, enhancing user interaction and accessibility.",
      image: "/img/projects/gesture.jpg",
      technologies: ["Python", "Computer Vision",]
    },
    {
        title: "Quiz App",
        description: "an interactive quiz app featuring dynamic question generation and real-time scoring, enhancing user engagement and learning outcomes. Implemented a user-friendly interface and robust backend functionality, ensuring seamless performance across multiple platforms.",
        image: "/img/projects/quiz.png",
        technologies: ["Flutter",]
      },
  ];

  return (
    <StyledProjects ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1.0 }
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectContent>
            <TechList>
              {project.technologies.map((tech, i) => (
                <TechItem key={i}>{tech}</TechItem>
              ))}
            </TechList>
          </ProjectBox>
        ))}
      </ProjectGrid>
    </StyledProjects>
  );
};

// ... (styled components remain the same)

export default ProjectsPage;

const StyledProjects = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #bb86fc;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
`;

const ProjectBox = styled(motion.div)`
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #03dac6;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align:left;
  }
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: 1E1E1E;
  margin-top: auto;
`;

const TechItem = styled.li`
  color: #bb86fc;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  background-color: #3a3a3a;
`;

