import { Box } from "@chakra-ui/react";
import Navbar from "../../molecules/Navbar/Navbar";

const Header = (): JSX.Element => {
  return (
    <Box
      as="header"
      bg="black"
      py={8}
      borderBottom={["1px", "unset"]}
      borderColor="divider"
    >
      <Navbar />
    </Box>
  );
};

export default Header;
