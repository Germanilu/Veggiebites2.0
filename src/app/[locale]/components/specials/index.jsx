'use client'
import {motion} from "framer-motion";
import Image from 'next/image';
import { useTranslations } from "next-intl";

import special1 from '../../../../static/media/img/special1.png';
import special2 from '../../../../static/media/img/special2.png';
import special3 from '../../../../static/media/img/special3.png';
import special4 from '../../../../static/media/img/special4.png';
import special5 from '../../../../static/media/img/special5.png';
import special6 from '../../../../static/media/img/special6.png';

import './index.scss';
const Specials = () => {
    const t = useTranslations("Specials");
    return(
        <motion.div id="special" className="contenedor-special"
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0},
          }}
          transition={{delay: 0.5, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <div className="titulo">
                <h1>{t('title')}</h1>
            </div>
            <div className="special-grid reveal-d300">
                <div className="special bg-effect-img">
                <Image className="img-special" src={special1} alt='Alcachofas en crema' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish1')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish1desc')} </p>
                        <p className="precio-special reveal-d1500">{t('dish1price')}</p>
                    </div>
                </div>
                <div className="special bg-effect-img">
                <Image className="img-special" src={special6} alt='Fatteh de Garbanzos' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish2')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish2desc')}</p>
                        <p className="precio-special reveal-d1500">{t('dish2price')}</p>
                    </div>
                </div>
                <div className="special bg-effect-img">
                <Image className="img-special" src={special3} alt='Veggie burger' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish3')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish3desc')}</p>
                        <p className="precio-special reveal-d1500">{t('dish3price')}</p>
                    </div>
                </div>
                <div className="special bg-effect-img">
                <Image className="img-special" src={special5} alt='Vichyssoise' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish4')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish4desc')} </p>
                        <p className="precio-special reveal-d1500">{t('dish4price')}</p>
                    </div>
                </div>
                <div className="special bg-effect-img">
                <Image className="img-special" src={special4} alt='Macedonia' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish5')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish5desc')}</p>
                        <p className="precio-special reveal-d1500">{t('dish5price')}</p>
                    </div>
                </div>
                <div className="special bg-effect-img">
                <Image className="img-special" src={special2} alt='Porridge de platano' width={320} height={180}   quality={100}  />
                    <div className="texto-special bg-effect-txt">
                        <h3 className="titulo-special reveal-d800">{t('dish6')}</h3>
                        <p className="descripcion-special reveal-d1300">{t('dish6desc')}</p>
                        <p className="precio-special reveal-d1500">{t('dish6price')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Specials;