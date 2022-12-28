import { Container } from "@chakra-ui/react";
import React from "react";
import AnimatedBestGear from "../molecules/AnimatedBestGear";
import CategoriesLinks from "../organisms/CategoriesLinks";
import Hero from "../organisms/Hero";
import MainGallery from "../organisms/MainGallery";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Container px={6} maxW="container.lg">
        <CategoriesLinks />
        <MainGallery />
        <AnimatedBestGear />
      </Container>
    </main>
  );
};

export default Homepage;
