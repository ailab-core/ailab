import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fira_Mono, Nunito_Sans } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import Providers from "./-providers";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ailab.mn"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      mn: "/mn",
    },
  },
  title: "AILab LLC",
  description: "",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'mn' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${nunitoSans.variable} ${firaMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <Providers>
            <main>{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
