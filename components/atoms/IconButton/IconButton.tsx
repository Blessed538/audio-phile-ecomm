import { IconButton } from "@chakra-ui/react";
import Image from "next/image";

const MenuIcon = (): JSX.Element => {
  let navOpen = true;
  return (
    <IconButton
      aria-label={navOpen ? "Close Menu" : "Open Menu"}
      aria-expanded={navOpen ? "true" : "false"}
      mr={{ sm: "2.625rem", lg: 0 }}
      variant="unstyled"
      isRound={true}
      aria-haspopup="true"
      lineHeight={0}
      display={{ base: "auto", lg: "none" }}
      icon={
        navOpen ? (
          <Image
            src="/images/shared/tablet/icon-close-menu.svg"
            width={16}
            height={15}
            aria-hidden="true"
            alt=""
          />
        ) : (
          <Image
            src="/images/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
            aria-hidden="true"
            alt=""
          />
        )
      }
    ></IconButton>
  );
};

export default MenuIcon;
