import { useTranslations } from "next-intl";

import './page.scss';

export default function About(){
  const t = useTranslations("About");
  return (
    <div className="about-design">
      <h1>{t('title')}</h1>
    </div>
  ) 
}