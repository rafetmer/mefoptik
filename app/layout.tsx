import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const goodly = localFont({
  src: [
    {
      path: "../public/fonts/goodly-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/goodly-semibold.otf",
      weight: "600", 
      style: "normal",
    },
  ],
  variable: "--font-goodly",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEF Optik - Her Bakış Bir Hikayedir",
  description: "2021 yılından bu yana Samsun'da göz sağlığı ve estetik alanda hizmet veren MEF Optik. Dünyaca ünlü markalar, yenilikçi cam teknolojileri ve kişiye özel çözümler.",
  keywords: "gözlük, optik, Samsun, mef optik, göz sağlığı, güneş gözlüğü, çerçeve",
  authors: [{ name: "MEF Optik" }],
  creator: "MEF Optik",
  publisher: "MEF Optik",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mefoptik.com"),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
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
        className={`${geistSans.variable} ${geistMono.variable} ${goodly.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
