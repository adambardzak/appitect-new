import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import React from "react";

const SEO = {
  en: {
    title: "Appitect",
    description: "Appitect is your solution for modern web applications.",
  },
  de: {
    title: "Appitect",
    description: "Appitect ist Ihre Lösung für moderne Webanwendungen.",
  },
  cs: {
    title: "Appitect",
    description: "Appitect je vaše řešení pro moderní webové aplikace.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = SEO[locale as keyof typeof SEO] || SEO.en;
  const baseUrl = "https://www.appitect.eu";
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${baseUrl}/${locale}`,
      siteName: seo.title,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        cs: `${baseUrl}/cs`,
      },
    },
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Hreflang pro všechny jazyky */}
        <link rel="alternate" href="https://www.appitect.eu/en" hrefLang="en" />
        <link rel="alternate" href="https://www.appitect.eu/de" hrefLang="de" />
        <link rel="alternate" href="https://www.appitect.eu/cs" hrefLang="cs" />
        <link
          rel="alternate"
          href="https://www.appitect.eu"
          hrefLang="x-default"
        />

        {/* Favicon tags */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
