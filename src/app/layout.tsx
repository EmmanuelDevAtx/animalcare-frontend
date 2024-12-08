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
      <body >
        <ScreenInformationProvider>
          <ContractProvider>
            <div className='fixed'>
              {/* <TestThreeJs /> */}
            </div>
            <div className="background-custom" />
            <Navigation />
            <main className=' px-40 py-20 '>
                {children}
            </main>
          </ContractProvider>
        </ScreenInformationProvider>
      </body>
    </html>
  );
}
