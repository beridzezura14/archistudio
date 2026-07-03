
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import { Noto_Sans_Georgian } from "next/font/google";
import type { Metadata } from "next";

const headingFont = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

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
    <html lang="ka" className={headingFont.variable}>
      <body className="min-h-screen overflow-x-hidden bg-white text-black antialiased dark:bg-[#050505] dark:text-zinc-100">
        <ThemeProvider>
          <Header />
          <main className="relative z-10 bg-white dark:bg-[#050505]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
