"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation/navigation";
import "./styles.css"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body >
      <div className="bg-fixed bg-cover bg-center h-screen bg-black" style={{ 
        backgroundColor: `hsla(256, 72%, 10%, 1)`,
        backgroundImage: `radial-gradient(
          at 100% 0%,
          hsla(262, 100%, 49%, 0.12) 0px,
          transparent 50%
        ),
        radial-gradient(at 0% 100%, hsla(20, 100%, 21%, 0.21) 0px, transparent 50%);`
       }}>
        <Navigation />
        {children}
        </div>
      </body>
    </html>
  );
}
