import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nalmanam Masala | Premium Spices & Masala Products",
  description:
    "Discover Nalmanam - premium masala products from Sri Murughan Flour Mill. 100% pure & natural spices without preservatives or artificial colors.",
  keywords:
    "Nalmanam, masala, spices, Sri Murughan Flour Mill, pure, natural, preservative-free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
