import '@/styles/tailwind.css'
import PlausibleProvider from 'next-plausible'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://erreur200.com'),
  generator: 'Next.js',
  applicationName: 'Erreur 200',
  title: {
    template: '%s - Erreur 200',
    default: 'Erreur 200 - Le podcast des gens qui font le web',
  },
  description:
    "Erreur 200 est un podcast dédié aux gens qui font le web. Animé par deux développeurs français, l'un vivant au Canada, l'autre en Angleterre, nous échangeons sur le web d'aujourd'hui et de demain.",
  authors: [
    { name: 'David Dias', url: 'https://thedaviddias.dev' },
    { name: 'Jean-Rémy Duboc', url: 'https://codaille.com' },
  ],
  themeColor: '#b12518ff',
  category: 'technology',
  openGraph: {
    title: 'Erreur 200',
    description:
      "Erreur 200 est un podcast dédié aux gens qui font le web. Animé par deux développeurs français, l'un vivant au Canada, l'autre en Angleterre, nous échangeons sur le web d'aujourd'hui et de demain.",
    url: 'https://erreur200.com',
    siteName: 'Erreur 200',
    locale: 'fr_FR',
    type: 'website',
    images:
      'https://res.cloudinary.com/thedaviddias/image/upload/v1612027685/erreur-200/erreur-200-podcast-artwork.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Erreur 200',
    card: 'summary_large_image',
    creator: '@erreur200radio',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full bg-secondary-dark antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
        <PlausibleProvider domain="erreur200.com" trackOutboundLinks={true} />
      </head>
      <link
        rel="icon"
        href="../images/icons/favicon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
