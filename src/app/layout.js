import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header.js";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto  px-4">
          <Header />
          {children}
        </main>
        <footer className="border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2024 All rigths reserved
        </footer>
      </body>
    </html>
  );
}
