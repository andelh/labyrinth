import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import colors from "../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 120px;
  margin-bottom: 15px;
`;
const SocialLink = styled(motion.a)`
  color: white;
  transition: 0.2s ease;
  :hover {
    color: ${colors.primary};
  }
`;

const Socials = () => (
  <Container>
    <SocialLink
      whileHover={{ scale: 1.1 }}
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
    >
      <FaFacebookF size={25} />
    </SocialLink>

    <SocialLink
      whileHover={{ scale: 1.1 }}
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram size={25} />
    </SocialLink>
    <SocialLink
      whileHover={{ scale: 1.1 }}
      href="https://twitter.com/"
      target="_blank"
      rel="noreferrer"
    >
      <FaTwitter size={25} />
    </SocialLink>
    <SocialLink
      whileHover={{ scale: 1.1 }}
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin size={25} />
    </SocialLink>
  </Container>
);

export default Socials;
