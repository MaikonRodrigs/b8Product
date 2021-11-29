import React from "react";
import { Container, Logo, Slogan } from './styles'

const Header = () => {
  return (
    <Container>
      <Logo
        src="https://uploads-ssl.webflow.com/601eb51de1fe7a2844f7680f/601eb70c07c3092c8a17fee0_b8one-vertical-logo.svg" />
      <Slogan>
        Products by: Figma
      </Slogan>
    </Container>
  )
}

export default Header;