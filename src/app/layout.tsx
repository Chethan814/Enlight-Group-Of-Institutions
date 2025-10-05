import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import ClientLayout from './ClientLayout'
import './globals.css';
import '../../public/assets/css/style.css'
import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/aos.min.css'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/icofont.min.css'
import '../../public/assets/css/magnific-popup.css'
import '../../public/assets/css/slick.css'
import '../../public/assets/css/swiper-bundle.min.css'

import '../../public/css/app.css'



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
  description: 'Enlight Group of Institutions - Leading provider of Nursing and Paramedical education with direct admission opportunities.',
  keywords: 'nursing admission, paramedical courses, BSc nursing, GNM, medical laboratory technology, medical imaging, medical anesthesia technology, direct admission, healthcare education',
  authors: [{ name: 'Enlight Group of Institutions' }],
  metadataBase: new URL('https://enlight.eduwego.in'),
  openGraph: {
    title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
    description: 'Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://enlight.eduwego.in/',
    images: ['/assets/img/logo/enlight-group-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enlight Group of Institutions - Nursing & Paramedical Education',
    description: 'Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more.',
    images: ['/assets/img/logo/enlight-group-logo.png'],
  },
  icons: {
    icon: [
      { url: '/cropped-Logo-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/cropped-Logo-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/cropped-Logo-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/cropped-Logo-192x192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Enlight Group of Institutions - Leading provider of Nursing and Paramedical education with direct admission opportunities." />
        <meta name="keywords" content="nursing admission, paramedical courses, BSc nursing, GNM, medical laboratory technology, medical imaging, medical anesthesia technology, direct admission, healthcare education" />
        <meta name="author" content="Enlight Group of Institutions" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enlight.eduwego.in/" />
        <meta property="og:title" content="Enlight Group of Institutions - Nursing & Paramedical Education" />
        <meta property="og:description" content="Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more." />
        <meta property="og:image" content="/assets/img/logo/enlight-group-logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://enlight.eduwego.in/" />
        <meta property="twitter:title" content="Enlight Group of Institutions - Nursing & Paramedical Education" />
        <meta property="twitter:description" content="Direct admission for Nursing and Paramedical courses. BSc Nursing, GNM, Medical Laboratory Technology, Medical Imaging, and more." />
        <meta property="twitter:image" content="/assets/img/logo/enlight-group-logo.png" />

        <title>Enlight Group of Institutions - Nursing & Paramedical Education</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/cropped-Logo-180x180.png" />


      </head>
      <body className={inter.variable}>
        <ClientLayout>
          {children}
        </ClientLayout>

        {/* Core JavaScript Dependencies - Load in order */}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" />
        <Script src="/assets/js/popper.min.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/js/swiper-bundle.min.js" />
        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/waypoints.min.js" />
        <Script src="/assets/js/jquery.counterup.min.js" />
        <Script src="/assets/js/jquery.meanmenu.min.js" />
        <Script src="/assets/js/jquery.scrollUp.min.js" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" />
        <Script src="/assets/js/isotope.pkgd.min.js" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" />
        <Script src="/assets/js/slick.min.js" />
        <Script src="/assets/js/plugin_plyr.js" />
        <Script src="/assets/js/plugins.js" />
        <Script src="/assets/js/ajax-form.js" />

        {/* Main JavaScript - Load last */}
        <Script src="/assets/js/main.js" />
      </body>
    </html>
  )
}
