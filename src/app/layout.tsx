import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "DPS Web Designer | Landing Pages de Alta Conversão & Sites Institucionais",
  description:
    "Desenvolvemos Landing Pages de Alta Conversão e Sites Institucionais sob medida para nutricionistas, advogados, psicólogos, contadores e profissionais autônomos. Solicite seu orçamento.",
  keywords: [
    "Web Designer",
    "DPS Web Designer",
    "Landing Page",
    "Site Institucional",
    "Criação de Sites",
    "Web Designer Campinas",
    "Web Designer São Paulo",
    "Sites para Nutricionistas",
    "Sites para Advogados",
    "Sites para Psicólogos",
    "Sites para Contadores",
    "Landing Page Alta Conversão",
  ],
  authors: [{ name: SITE_CONFIG.author, url: "https://wa.me/5519994493257" }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dpswebdesigner.com.br",
    title: "DPS Web Designer | Landing Pages & Sites Institucionais",
    description:
      "Sua Presença Digital com a Autoridade que seu Trabalho Merece. Landing Pages de Alta Conversão e Sites Institucionais sob medida.",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "DPS Web Designer | Sites & Landing Pages de Alta Performance",
    description:
      "Desenvolvemos Landing Pages e Sites Institucionais de Alta Conversão para profissionais autônomos e empresas.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    description:
      "Desenvolvimento de Landing Pages de Alta Conversão e Sites Institucionais sob medida.",
    email: SITE_CONFIG.email,
    telephone: "+5519994493257",
    url: "https://dpswebdesigner.com.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "SP",
    },
    openingHours: "Mo-Fr 08:00-19:00",
    sameAs: [SITE_CONFIG.whatsappUrl],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
