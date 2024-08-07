import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from 'next-i18next';
import BrowerInitor from "./browser-initor";
import I18nServer from "./i18n-server";
import { getLocaleOnServer } from "@/i18n/server";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body 
        className="h-full select-auto"
        data-api-prefix={process.env.NEXT_PUBLIC_API_PREFIX}
        data-pubic-api-prefix={process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX}
        data-public-edition={process.env.NEXT_PUBLIC_EDITION}
        data-public-sentry-dsn={process.env.NEXT_PUBLIC_SENTRY_DSN}
        data-public-maintenance-notice={process.env.NEXT_PUBLIC_MAINTENANCE_NOTICE}
        data-public-site-about={process.env.NEXT_PUBLIC_SITE_ABOUT}
        suppressHydrationWarning
      >
        <BrowerInitor>
            <I18nServer locale={locale}>{children}</I18nServer>
        </BrowerInitor>
        <Toaster />
      </body>
    </html>
  );
}
