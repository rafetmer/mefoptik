import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEF Optik - Her Bakış Bir Hikayedir",
  description: "2021 yılından bu yana Samsun'da göz sağlığı ve estetik alanda hizmet veren MEF Optik. Dünyaca ünlü markalar, yenilikçi cam teknolojileri ve kişiye özel çözümler.",
  keywords: "gözlük, optik, Samsun, mef optik, göz sağlığı, güneş gözlüğü, çerçeve",
  authors: [{ name: "MEF Optik" }],
  creator: "MEF Optik",
  publisher: "MEF Optik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mefoptik.com"),
  openGraph: {
    title: "MEF Optik - Her Bakış Bir Hikayedir",
    description: "2021 yılından bu yana Samsun'da göz sağlığı ve estetik alanda hizmet veren MEF Optik.",
    url: "https://mefoptik.com",
    siteName: "MEF Optik",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEF Optik - Her Bakış Bir Hikayedir",
    description: "2021 yılından bu yana Samsun'da göz sağlığı ve estetik alanda hizmet veren MEF Optik.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
