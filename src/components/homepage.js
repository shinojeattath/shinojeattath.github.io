import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import dataAnimation from '../animation/homepage.json'; 

const HomePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Shinoj-E-M Resume.pdf';
    link.download = 'Shinoj_EM_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledHome>
      <ContentWrapper>
        <LeftSection>
            <LeftSectionCenter>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shinoj E M
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Backend Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Specializing in building robust and scalable server-side solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button onClick={handleDownload}>Download Resume</Button>
          </motion.div>
          </LeftSectionCenter>
        </LeftSection>
        <RightSection>
          <LottieWrapper>
            <Lottie animationData={dataAnimation} loop={true} />
          </LottieWrapper>
        </RightSection>
      </ContentWrapper>
    </StyledHome>
  );
};


const LottieWrapper = styled.div`
  width: 100%;
  max-width: 600px; // Adjust this value as needed
`;

const StyledHome = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 50%;
  display:grid;
  align-items:center;
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #bb86fc;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #03dac6;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height:100%;
    
  }
`;
const LeftSectionCenter = styled.div`

`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: #03dac6;
  color: #121212;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bb86fc;
  }
`;

export default HomePage;