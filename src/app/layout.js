import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header.js";
import { AppProvider } from "../components/AppContact";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto  px-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}

            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All rigths reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
