import {NextIntlClientProvider, useMessages} from 'next-intl';
import Navbar                                from './components/navbar/index';
import ResponsiveLayout                      from './components/responsive/responsiveLayout';
import { Montserrat }                             from "next/font/google";
import { useLocale }                         from "next-intl";
import { notFound }                          from "next/navigation";
import { Providers }                         from "../Redux/provider";
import "./globals.css";
const mettiweather = Montserrat({ subsets: ["latin"], weight: ['300','400', '700','900'] });

export const metadata = {
  title: "Default title",
  description: "Default description",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  const messages = useMessages();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={mettiweather.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ResponsiveLayout />
            <Navbar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}