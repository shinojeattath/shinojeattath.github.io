import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import contactAnimation from '../animation/contact.json'; // Adjust the path as needed

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_i0go9hv', 'template_fkmv6vy', form.current, 'GMG18PoQstMLK64Br')
      .then((result) => {
        console.log(result.text);
        setFormData({ user_name: '', user_email: '', message: '' });
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <StyledContainer>
      <LeftSection
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledForm ref={form} onSubmit={handleSubmit}>
          <StyledTitle>Contact Me</StyledTitle>
          <StyledLabel htmlFor="user_name">Name</StyledLabel>
          <StyledInput
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <StyledLabel htmlFor="user_email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <StyledButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </StyledButton>
        </StyledForm>
      </LeftSection>
      <RightSection>
        <LottieWrapper>
          <Lottie animationData={contactAnimation} loop={true} />
        </LottieWrapper>
      </RightSection>
    </StyledContainer>
  );
};

export default ContactForm;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  padding: 2rem;
`;

const LeftSection = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: auto;
  max-width:100%;
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

const StyledForm = styled.form`
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const StyledTitle = styled.h1`
  color: #BB86FC;
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #03DAC6;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #03DAC6;
  background-color: #2c2c2c;
  color: #ffffff;
  border-radius: 4px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #03DAC6;
  background-color: #2c2c2c;
  color: #ffffff;
  border-radius: 4px;
  min-height: 100px;
`;

const StyledButton = styled(motion.button)`
  background-color: #BB86FC;
  color: #000000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const LottieWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;