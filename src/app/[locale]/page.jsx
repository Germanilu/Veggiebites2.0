import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import './page.scss';

export const metadata = {
  title:"Home title",
  description:"home metadata description"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <div className="hero-section">
        <h1 className='hero-title'>{t('title')}
          
        </h1>
      </div>
      <div className="first-section">
        <h2>{t('first-section-title')}</h2>
      </div>
      <div className="second-section">
        <h2>{t('second-section-title')}</h2>
      </div>
      <Map />
      <ScrollToTop />
    </div>
  )
}

