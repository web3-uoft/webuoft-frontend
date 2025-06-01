import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import "@fontsource/dm-sans";
import Head from "next/head";

import "../styles/globals.css";
import { MetamaskProvider } from "@/hooks/useMetamask";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Web3 at University of Toronto (W3B)</title>
      </Head>
      <ChakraProvider theme={theme}>
        <MetamaskProvider>
          <Component {...pageProps} />
        </MetamaskProvider>
      </ChakraProvider>
    </div>
  );
}
