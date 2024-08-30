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
            <FaMapMarkerAlt color="#eb466b" size="40" />
            <div>
            <p>{t('street')}</p>
            <p>{t('street1')}</p>
            </div>
          </div>
          <div className="info-box">
            <FaPhone color="#eb466b" size="40" />
            <p>{t('phone')}</p>
          </div>
          <div className="info-box">
            <MdMarkEmailUnread color="#eb466b" size="40" />
            <p>{t('email')}</p>
          </div>
          <div className="info-box socials">
            <FaFacebookSquare  size="40" className="icon" />
            <FaSquareInstagram size="40" className="icon"/>
            <FaSquareXTwitter size="40" className="icon"/>
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



