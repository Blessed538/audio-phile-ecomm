import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/organisms/Header/Index";
import Footer from "../components/organisms/Footer";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import ModalContextProvider from "../context/ModalContext";
import CartModal from "../components/organisms/CartModal";
import store from "../store";
import Overlay from "../components/atoms/Overlay";
import theme from "../style/theme";
import CheckoutModal from "../components/organisms/CheckoutModal";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ChakraProvider theme={theme} resetCSS>
        <Provider store={store}>
          <ModalContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <CartModal />
            <CheckoutModal />
            <Overlay />
          </ModalContextProvider>
        </Provider>
      </ChakraProvider>
    );
  }
}
