"use client";
import "./globals.css";
import "./styles/background.css";
import "./styles/styles.css";
import { Navigation } from "./components/navigation/navigation";
import { ContractProvider } from "./hooks/contractActions";
import { TestThreeJs } from "./components/custom/testThree";
import { ScreenInformationProvider } from "./hooks/screenInfo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <ScreenInformationProvider>
          <ContractProvider>
            <div
              className="bg-fixed bg-cover h-screen bg-black background-custom"
              style={{ zIndex: -1 }}
            />
            <TestThreeJs />
            <div style={{ zIndex: 2 }}>
              <Navigation />
              {children}
            </div>
          </ContractProvider>
        </ScreenInformationProvider>
      </body>
    </html>
  );
}
