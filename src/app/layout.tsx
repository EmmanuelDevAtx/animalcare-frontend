"use client";
import "./globals.css";
import "./styles/background.css";
import { Navigation } from "./components/navigation/navigation";
import { ContractProvider } from "./hooks/contractActions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <ContractProvider>
          <div className="bg-fixed bg-cover bg-center h-screen bg-black background-custom">
            <Navigation />
            {children}
          </div>
        </ContractProvider>
      </body>
    </html>
  );
}
