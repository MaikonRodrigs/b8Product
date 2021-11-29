import React from 'react';
import { Container, GitAvatar, GitUser } from './styles';

const Footer = () => {
  return (

    <Container>
      <GitAvatar src="https://github.com/maikonrodrigs.png" />
      <GitUser>
        <a href="https://github.com/MaikonRodrigs" target="_blank" rel="noreferrer">
          https://github.com/MaikonRodrigs
        </a>
      </GitUser>
    </Container>
  )
}

export default Footer;
