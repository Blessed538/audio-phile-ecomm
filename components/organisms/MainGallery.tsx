import { VStack } from "@chakra-ui/react";
import ZX9Speaker from "../molecules/ZX9Speaker";
import ZX7Speaker from "../molecules/2X7Spkeaker";
import YX1Earphones from "../molecules/YXIEarphones";
const MainGallery = (): JSX.Element => {
  return (
    <VStack
      mt="7.5rem"
      spacing={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
      align="stretch"
    >
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </VStack>
  );
};

export default MainGallery;
