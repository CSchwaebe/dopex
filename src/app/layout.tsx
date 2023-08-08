// Imports
// ========================================================
import { Providers } from "./providers";
import './globals.css';
import Header from "./components/header";
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
    <html lang="en" data-theme="mytheme">
        <head />
        <body className="bg-base-100">
          <Providers>
            <Header />
            <Background>{children}</Background>
            <Footer />
          </Providers>
        </body>
    </html>
  );
}
