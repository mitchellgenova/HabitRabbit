import type { Metadata } from "next";
import { inter } from "../../font";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Rabbit",
  description: "A habit tracking application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
