import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Robot - Interactive 3D Experiences",
  description: "Build immersive, interactive 3D experiences with cutting-edge technology. Create the future of the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-[100dvh] overflow-hidden antialiased`}
    >
      <body className="h-[100dvh] w-screen overflow-hidden bg-black antialiased">{children}</body>
    </html>
  );
}
