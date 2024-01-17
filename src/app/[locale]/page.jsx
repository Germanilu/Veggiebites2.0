import { useTranslations } from "next-intl";

import './page.scss';

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <div className="hero-section">
        <h1 className='hero-title'>{t('title')}</h1>
      </div>
      <div className="first-section">
        <h2>{t('first-section-title')}</h2>
      </div>
      <div className="second-section">
        <h2>{t('second-section-title')}</h2>
      </div>
    </div>
  )
}