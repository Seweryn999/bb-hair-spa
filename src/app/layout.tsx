import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../../next-seo.config";
import { ReactNode } from "react";
import Header from "../components/ui/layout/Header";
import Footer from "../components/ui/layout/Footer";
import Script from "next/script";

export const metadata = {
  title: "BB Hair Spa",
  description: "Salon fryzjerski – Twoje piękno w dobrych rękach.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <html lang="pl">
      <head>
        <DefaultSeo {...defaultSEOConfig} />
        <link rel="icon" href={`${basePath}/logo/logob.svg`} />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="fade-in min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
