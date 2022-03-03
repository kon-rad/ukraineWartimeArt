import '../styles/globals.css'
import '../styles/globals.scss'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import { getProvider } from "../utils/web3";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import "../styles/Home.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";
import { AppStateProvider } from "../context/appState";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let analytics: any;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
// /* CSS HEX */
// https://coolors.co/202a25-5f4bb6-86a5d9-26f0f1-c4ebc8
// --dark-jungle-green: #202a25ff;
// --plump-purple: #5f4bb6ff;
// --little-boy-blue: #86a5d9ff;
// --fluorescent-blue: #26f0f1ff;
// --tea-green: #c4ebc8ff;
// oxford blue #0E1C36
// rich black #040F0F
// space cadet #1B1F3B
// periwinkle crayola #D6E3F8

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    gray: {
      700: "#1B1F3B",
      800: "#040F0F",
      900: "#0E1C36",
    },
    brand: {
      100: "#202a25ff",
      200: "#5f4bb6ff",
      300: "#86a5d9ff",
      400: "#26f0f1ff",
      500: "#c4ebc8ff",
      600: "#ea3546", // red
      700: "#D6E3F8", // periwinkle crayola
      800: "#ffd500", // ukraine yellow
      900: "#005bbb", // saphire ukrainian blue
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getProvider}>
      <ChakraProvider theme={theme}>
        <AppStateProvider>
        <SEO />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </AppStateProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp
