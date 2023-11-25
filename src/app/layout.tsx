"use client";
import "./globals.css";
import "./styles/background.css";
import "./styles/styles.css";
import { Navigation } from "./components/navigation/navigation";
import { ContractProvider } from "./hooks/contractActions";
import { TestThreeJs } from "./components/custom/testThree";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <ContractProvider>
          <div className="bg-fixed bg-cover h-screen bg-black background-custom" />
            <Navigation />
            {children}
          
        </ContractProvider>
      </body>
    </html>
  );
}
