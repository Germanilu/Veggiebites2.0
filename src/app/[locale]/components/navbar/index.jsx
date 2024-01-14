import Link             from 'next/link';
import  LanguageSwitcher  from '../language-switcher';
import { useTranslations } from "next-intl";
import './index.scss';

export default function Navbar() {
  const t = useTranslations("Navbar");

    return(
       <nav className="navbar">
        <ul className="navbar-list">
          <li className="list-item">
            <Link className="item" href="/">{t('home')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/about" >{t('about-us')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/menu">{t('menu')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/contact-us">{t('contact-us')}</Link>
          </li>
        </ul>
        <LanguageSwitcher />
       </nav>
    )
}