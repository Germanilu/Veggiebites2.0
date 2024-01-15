import Contact              from '../components/contact/index';
import { useTranslations }  from "next-intl";

import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design">
      <h1>{t('title')}</h1>
      <Contact/>
    </div>
  ) 
}