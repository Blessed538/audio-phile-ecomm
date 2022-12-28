import { Container, Flex } from "@chakra-ui/react";
import Logo from "../../atoms/Logo";
import MenuIcon from "../../atoms/IconButton/IconButton";
import NavLinks from "../NavLinks";
import CartIcon from "../../atoms/CartIcon";
const Navbar = () => {
  return (
    <Container maxW="container.lg" px={6}>
      <Flex
        justify="space-between"
        position="relative"
        zIndex="modal"
        sx={{
          "@media screen and (min-width: 30em)": {
            "&::after": {
              content: "''",
              position: "absolute",
              bottom: "-2rem",
              height: "0.0625rem",
              width: "100%",
              backgroundColor: "divider",
            },
          },
        }}
      >
        <MenuIcon />
        <Logo />
        <NavLinks />
        <CartIcon />
      </Flex>
    </Container>
  );
};
export default Navbar;
