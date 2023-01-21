import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
//import Features from "@/components/Features";
//import Allfeatures from "@/components/Allfeatures";
import RightSidebar from "@/components/RightSidebar";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = {};

  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <Navbar />
        <div style={{ display: "flex", padding: "1rem" }}>
          <div style={{ width: "80%" }}>
            <Component {...pageProps} />
          </div>
          <RightSidebar />
        </div>
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}
