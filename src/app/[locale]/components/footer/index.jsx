import { useTranslations }      from "next-intl";

import './index.scss'

export default function Footer(){

  const t = useTranslations("Footer");

  return (
    <div className="footer-design">
      <h1>{t('title')}</h1>
    </div>
  ) 
}



