import { useTranslation } from '../i18n';

import './page.scss';

export default async function Home({ params: { lng } }) {
  // https://locize.com/blog/next-app-dir-i18n/
  
  const { t } = await useTranslation(lng);
  console.log("HOME",t)
  return (
    <div className='home-design'>
      <div className="hero-section">
        <h1 className='hero-title'>{t('title')}</h1>
      </div>
      <div className="first-section">
        <h2>{t('first-section')}</h2>
      </div>
      <div className="second-section">
      <h2>{t('second-section')}</h2>
      </div>
    </div>
  )
}
