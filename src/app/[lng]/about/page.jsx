import './page.scss';
import { useTranslation } from '../../i18n';
export default async function About({ params: { lng } }){

  const { t } = await useTranslation(lng, 'about')

  return (
    <div className="about-design">
      <h1>{t('title')}</h1>
    </div>
  ) 
}