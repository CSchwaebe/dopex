// Imports
// ========================================================
import { Providers } from "./providers";
import './globals.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from "next";
import Background from "./components/background";

export const metadata: Metadata = {
  title: "Dopex",
  description: "Onchain Options",
};


// Layout
// ========================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
        <head />
        <body  className="dark text-foreground bg-background">
          <Providers>
            <Navbar />
            <Background>{children}</Background>
            <Footer />
          </Providers>
        </body>
    </html>
  );
}

/*
style={{"background": "linear-gradient(270deg, rgba(235,237,251,1) 0%, rgba(243,244,249,1) 100%)"}} 
*/