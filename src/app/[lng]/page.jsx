import './page.scss'
import Link from 'next/link'
import { useTranslation } from '../i18n'

export default async function Home({ params: { lng } }) {
  // https://locize.com/blog/next-app-dir-i18n/
  
  const { t } = await useTranslation(lng);
  console.log("HOLA",t)
  return (
    <div className='home-design'>
      <div className="hero-section">
        <h1 className='hero-title'>{t('title')}</h1>
      </div>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/about`}>
        second page
      </Link>
      <div className="first-section">
        <h2>FIRST SECTION</h2>
      </div>
      <div className="second-section">
        <h2>SECOND SECTION</h2>
      </div>
    </div>
  )
}
