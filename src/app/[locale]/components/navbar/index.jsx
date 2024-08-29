'use client'

import {Link}               from '../../../../navigation';
import  LanguageSwitcher    from '../language-switcher';
import { useTranslations }  from "next-intl";
import { useSelector }      from 'react-redux';
import { useEffect, useState }         from 'react';
import { IoMenu }           from "react-icons/io5";
import { RxCross2 }         from "react-icons/rx";
import {motion} from "framer-motion";
import './index.scss';

export default function Navbar() {
  const t                       = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <>
      {
        isMobile ?
          <nav className={`navbar ${openMenu ? "open":"close"}`}
          >
            <div className='menu-action' >
              {openMenu ? <RxCross2 className='burger-menu-icon' size={40} onClick={() => setOpenMenu(!openMenu)} /> : <IoMenu className='burger-menu-icon' size={40} onClick={() => setOpenMenu(!openMenu)} />}
              {openMenu &&
                <motion.ul className='mobile-navbar-box'
                
                variants={{
                  open:{
                    x:"0%",
                  },
                  closed:{
                    x:'100%',
                  },
                }}
                initial="closed"
                animate="open"
                
                >
                  <li className="list-item">
                    <Link className="item" href="/" onClick={() => setOpenMenu(!openMenu)}>{t('home')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/about"onClick={() => setOpenMenu(!openMenu)} >{t('about-us')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/menu" onClick={() => setOpenMenu(!openMenu)}>{t('menu')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/contact-us" onClick={() => setOpenMenu(!openMenu)}>{t('contact-us')}</Link>
                  </li>
                  <li className="list-item language">
                  <LanguageSwitcher className="language-switcher" />
                  </li>
                </motion.ul>
              }
            </div>
          </nav>
          :
          <nav className={`navbar ${scrolled ? 'scroll':""}`}>
            <ul className="navbar-list">
              <li className="list-item">
                <Link className="item" href="/">{t('home')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/#special" >{t('special')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/#about" >{t('about-us')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/menu">{t('menu')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/contact-us">{t('contact-us')}</Link>
              </li>
              <LanguageSwitcher />
            </ul>
          </nav>
      }
    </>
  )
}