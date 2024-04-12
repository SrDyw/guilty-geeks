import { Inter } from "next/font/google";
import "./globals.css";
import "@/database/index.database";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mirkastillito",
  description:
    "All of the information about Mirkastillito, hostal aviable on Historic Center of Old Havana Cuba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
