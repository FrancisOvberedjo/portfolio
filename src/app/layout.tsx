import type { Metadata } from "next";
import { Montserrat, Bebas_Neue} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";


const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: ["400","600","700","800","900"],
  display: 'swap',
  fallback: ["system-ui", "sans-serif"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
  fallback: ["system-ui", "sans-serif"],
});



export const metadata: Metadata = {
  title: "Francis | Front-End Developer & UI/UX Designer",
  description: "Francis is a front-end web developer, UI/UX designer, and graphic designer creating modern, user-focused websites and visual identities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.variable} ${bebas.variable} bg-white text-custom-black font-normal text-sm md:text-xl lg:text-lg antialiased`}
      >
        <Navbar/>
          <main className="pt-24 lg:pt-20">
           {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
