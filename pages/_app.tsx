<<<<<<< HEAD
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
=======
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
>>>>>>> master

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
<<<<<<< HEAD
      <Component {...pageProps} />
=======
      <Navbar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
>>>>>>> master
    </ChakraProvider>
  );
}
