'use client'
import {motion} from "framer-motion";
import { useTranslations } from "next-intl";3
import Carousel from "../carousel";
import './index.scss';
const AboutUs = () => {
    const t = useTranslations("About");

    return(
        <div className="about-us-section">
            <motion.div 
            className="text"
            variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1,y:0},          
            }}
            transition={{delay:0.5, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <h2>{t('title')}</h2>
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            </motion.div>
            <div className="carousel">
                <Carousel/>
            </div>
        </div>
    )
}

export default AboutUs