import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjani Beauty Center",
  description:
    "Nikmati layanan perawatan terbaik yang kami rancang untuk memancarkan kecantikan alami Anda setiap hari.",
  icons: {
    icon: "/logo.png",
  },
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
