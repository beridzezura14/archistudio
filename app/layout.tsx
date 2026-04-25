
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "სამშენებლო კომპანია | ARCHI STUDIO",
  description: "Construction company landing page with responsive hero section.",
  icons: {
    icon: "/window.png", // ძირითადი ფაილი (ჩვეულებრივ .ico ფორმატის)
    
  },
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
