import { AppProvider } from "@/context/AppContext";
import App from "./App";
import Navbar from "@/components/Navbar/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import NotificationProvider from "@/context/NotificationContext";
import Head from "next/head";

export default function Home() {
  return (
    <AppProvider>
      <NotificationProvider>
        <ModalProvider>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Jersey+25&family=Pixelify+Sans:wght@400..700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Navbar />
          <App />
        </ModalProvider>
      </NotificationProvider>
    </AppProvider>
  );
}
