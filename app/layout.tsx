
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARQ BUILD",
  description: "Construction company landing page with responsive hero section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
