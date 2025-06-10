import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js template with React 19 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
