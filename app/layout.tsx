import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites · Quick recipes you'll actually cook",
  description: "A tiny recipe app built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="foot">
          Built with Next.js + TypeScript · NextBites
        </footer>
      </body>
    </html>
  );
}
