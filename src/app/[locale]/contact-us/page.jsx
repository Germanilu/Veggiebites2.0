import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import Footer              from '../components/footer/index';

import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design-page">
      <h1>{t('title')}</h1>
      <div className="contact">
      <Contact/>

      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  ) 
}