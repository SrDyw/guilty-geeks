import { AppProvider } from "@/context/AppContext";
import App from "./App";
import Navbar from "@/components/Navbar/Navbar";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <AppProvider>
      <ModalProvider>
        <Navbar />
        <App />
      </ModalProvider>
    </AppProvider>
  );
}
