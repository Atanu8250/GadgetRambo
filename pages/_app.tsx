import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = {};

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}
