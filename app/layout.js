import { Inter } from "next/font/google";
import "./globals.css";
import "@/database/index.database";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guilty Geeks - Build our own world",
  description:
    "All of the information about the gamedev Team named Guilty Geeks are here, from game development, to community management and more.",
  category: "gaming",
  keywords: ["guilty geeeks", "gaming", "indie", "cuba"],
  openGraph: {
    title: "Guilty Geeks - Build our own world",
    description:
      "All of the information about the gamedev Team named Guilty Geeks are here, from game development, to community management and more.",
    url: "https://guilty-geeks.vercel.app/",
    siteName: "Guilty Geeks - Build our own world",
    images: [
      {
        url: "https://guilty-geeks.vercel.app/assets/img/Banner.png",
        width: 1600,
        height: 900,
        alt: "Guilty Geeks",
      },
    ],
    locale: "es_US",
    type: "website",
  },
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
