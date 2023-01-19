import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {

  // const {}  = useSelector(store => store.authManager)

  return (
    <ChakraProvider>
      <Provider store={store}>
      {/* <Navbar /> */}
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
