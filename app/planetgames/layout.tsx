import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ContextProvider } from "../../context/contextProvider";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Home | PlanetGames",
  description: "Generated by create next app",
};

type LayoutProps = {
  children: ReactNode; // Type the children prop
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white relative w-[100vw] overflow-x-hidden">
        <ContextProvider>
          <Nav />
          <main className="min-h-[77vh]">{children}</main>

          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
