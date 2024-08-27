import { useTranslations } from "next-intl";
import Map from "../google-map-location/index";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import './index.scss'

export default function Footer() {

  const t = useTranslations("Footer");

  return (
    <div className="footer-design">
      <Map />
      <div className="footer-container">
        <div className="info">
          <div className="info-box">
            <FaMapMarkerAlt color="#62a5b8" size="40" />
            <p>{t('street')}</p>
          </div>
          <div className="info-box">
            <FaPhone color="#62a5b8" size="40" />
            <p>{t('phone')}</p>
          </div>
          <div className="info-box">
            <MdMarkEmailUnread color="#62a5b8" size="40" />
            <p>{t('email')}</p>
          </div>
          <div className="info-box socials">
            <FaFacebookSquare color="#62a5b8" size="40" />
            <FaSquareInstagram color="#62a5b8" size="40" />
            <FaSquareXTwitter color="#62a5b8" size="40" />
          </div>
        </div>
        <div className="container">
          <div className="text">
            <span>{t('rights')}</span>
          </div>
          <div className="policies">
            <a className="policy" href="/privacy"> {t('privacy')}</a>
            <a href="/cookie"> {t('conditions')}</a>
          </div>
        </div>
      </div>
    </div>
  )
}



