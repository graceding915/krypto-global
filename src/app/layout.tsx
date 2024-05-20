import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FootBar from "@/components/FoorBar";
import { ScrollProvider } from "@/components/ScrollProvider";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "KRYPTO.",
  description: "Discovers and invests in high-potential blockchain projects",
  icons: {
    icon: "/images/favicon-krypto-white.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ScrollProvider> 
          <NavBar />
          {children}
          <FootBar />
        </ScrollProvider>
      </body>
    </html>
  );
}
