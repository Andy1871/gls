import type { Metadata } from "next";
import { Shippori_Mincho, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

// const inter = Inter({
//   variable: "--font-main",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-main",
});

export const metadata: Metadata = {
  title: "Green Life Studio",
  description: "Green Life Studio - Pilates, PT & Nutrition.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` ${shipporiMincho.variable}  ${montserrat.variable} antialiased`}
    >
      <body className="min-h-screen bg-beige  flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
