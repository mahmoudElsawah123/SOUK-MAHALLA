import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from 'next/font/local'
import { Providers } from '@/store/provider';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Fotter/Fotter';


const myFont = localFont({ src: './Samim.ttf' })

export const metadata = {
  title : ' سوق المحلة الكبري',
  description : 'سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي',
  url : "https://souq-mahala.com",
  type: 'website',
 type : 'local business',
  openGraph: {
    images:  `https://deltawy.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79a01fb9.png&w=1920&q=75`,
    title : 'سوق المحلة',
    url : 'https://souq-mahala.com',
    site_name : 'IMDb',
    type: 'website',
    description : 'سوق المحلة   شباشب حريمي محفظة حريمي موبايلات أساور مكياج بدي و تونيك حريمي',
    email : 'deltawy@gmail.com',
    phone_number : '201067439828',
    latitude : '30.9763086',
    longitude : '31.1595836',
    locality : 'elmahalla',
    countryName : 'Egypt',
    streetAddress : 'elmahalla',
    generator: 'سوق المحله الكبري',
    applicationName: 'سوق المحله الكبري',
    referrer: 'origin-when-cross-origin',
    keywords: ['سوق المحله الكبري', 'شركة دلتاوي', 'المحله الكبري'],
    authors: [{ name: 'شركة دلتاوي' }, { name: 'شركة دلتاوي', url: 'https://deltawy.com' }],
    colorScheme: 'light',
    creator: 'شركة دلتاوي',
    publisher: 'شركة دلتاوي',
    formatDetection: {
      email: false,
      address: "المحله الكبري",
      telephone: "201067439828",
    },
    metadataBase: new URL('https://souq-mahala.com/'),
    alternates: {
      canonical: '/',
      languages: {
        'ar': '/ar-eg',
      },
    },
    openGraph: {
      images: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
    shortcut: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
    apple: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
    other: {
      rel: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
      url: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سوق المحله الكبري    ',
    description: 'سوق المحله الكبري',
    creator: '@سوق المحله الكبري',
    images: ['https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  appleWebApp: {
    title: 'سوق المحله الكبري',
    statusBarStyle: 'black-translucent',
    startupImage: [
      'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
      {
        url: 'https://souq-mahala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo512.6162ae29.png&w=256&q=75',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  alternates: {
    canonical: 'https://souq-mahala.com',
    languages: {
      'ar-EG': 'https://nextjs.org/ar-EG',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://souq-mahala.com/rss.xml',
    },
  },
  category: 'market',
  other: {
    custom: 'meta',
  },


}


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body 
      className={myFont.className}
      >
        <Providers>
        <nav className='nav_bar'>
         <NavBar/>
       </nav>
          <main style={{minHeight : '100vh'}}>
            {children}
          </main>
       <footer>
         <Footer/>
       </footer>
      </Providers>
      </body>
    </html>
  );
}
