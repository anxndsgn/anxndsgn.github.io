import { Inter } from 'next/font/google';
import './globals.css';
import Background from '@/components/background';
import 'remixicon/fonts/remixicon.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ANXN',
  description: 'designed by anxn',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Background />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PSQKZWTBF8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PSQKZWTBF8');`}
      </Script>
    </html>
  );
}
