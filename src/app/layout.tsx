"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5";
import { ConnectWallet } from "./components/connectWallet/connectWallet";
import { Navigation } from "./components/navigation/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
