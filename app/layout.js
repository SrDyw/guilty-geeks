import { Inter } from "next/font/google";
import "./globals.css";
import "@/database/index.database";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guilty Geeks - Build our own world",
  description:
    "All of the information about the gamedev Team named Guilty Geeks are here, from game development, to community management and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+25&family=Pixelify+Sans:wght@400..700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
