import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";


// Load Changa font
const changa = Changa({
  variable: "--font-changa", // Custom variable name to use in your styles
  subsets: ["arabic", "latin"], // Add more subsets if needed (e.g., "arabic", "latin-ext")
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${changa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
