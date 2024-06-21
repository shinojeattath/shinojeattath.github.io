import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <StyledAbout>
      <ContentWrapper>
        <Header>
          <Title>LEARN MORE ABOUT ME</Title>
        </Header>
        <FlexContainer>
          <ImageContainer>
            {/* Replace with actual image path */}
            <img src="1.png" alt="Shinoj E M" />
          </ImageContainer>
          <InfoContainer>
            <Role>Backend Developer</Role>
            <Description>
              I am Shinoj, a passionate and experienced backend developer specializing in creating scalable and efficient server-side solutions. With a strong foundation in various programming languages and databases, I have successfully delivered robust backend systems for diverse projects.
            </Description>
            <DetailsGrid>
              <DetailItem>
                <DetailLabel>Birthday:</DetailLabel>
                <DetailValue>28 February 2003</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Degree:</DetailLabel>
                <DetailValue>Under Graduate</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Phone:</DetailLabel>
                <DetailValue>+91 9072996994</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Email:</DetailLabel>
                <DetailValue>em.shinojeattath5112@gmail.com</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>City:</DetailLabel>
                <DetailValue>Perinjanam, Thrissur, Kerala</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Freelance:</DetailLabel>
                <DetailValue>Available</DetailValue>
              </DetailItem>
            </DetailsGrid>
          </InfoContainer>
        </FlexContainer>
      </ContentWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: ;
`;

const ContentWrapper = styled.div`
  max-width: auto;
  margin: 0 ;
  width: 100%;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
  color: #03dac6;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #bb86fc;
  text-align:left;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  flex: 2;
  content:justify;
`;

const Role = styled.h3`
  color: #03dac6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 7.5rem;
  line-height: 1.6;
  font-style: italic;
  font-size: 18px;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
   @media (max-width: 768px){
    grid-template-columns: 1fr;}
`;

const DetailItem = styled.div`

  display: flex;
  padding-top 30px;
  align-items: center;
`;

const DetailLabel = styled.span`
  color: #bb86fc;
  font-size:24px;
  margin-right: 0.5rem;
  &::before {
    content: '>';
    margin-right: 0.5rem;
    color: #03dac6;
  }
    @media (max-width: 768px){
     font-size: 18px;
    }
`;

const DetailValue = styled.span`
  color: #ffffff;
  font-size: 24px;
   @media (max-width: 768px){
     font-size: 18px;
     }

`;

export default AboutPage;