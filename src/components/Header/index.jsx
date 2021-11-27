import React from "react";
import { Container, Navbar, Logo, Menu } from './styles'

const Header = () => {
  return (
    <Container>
      <Navbar>
        <Logo />
        <Menu />
      </Navbar>
    </Container>
  )
}

export default Header;