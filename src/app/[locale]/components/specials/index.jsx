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
        <motion.div id="special" class="contenedor-special"
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0},
          }}
          transition={{delay: 0.5, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <div class="titulo">
                <h1>Nuestros Platos Especiales</h1>
            </div>
            <div class="special-grid reveal-d300">
                <div class="special bg-effect-img">
                <Image className="img-special" src={special1} alt='Alcachofas en crema' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Alcachofas en crema</h3>
                        <p class="descripcion-special reveal-d1300">Crema de tubérculos de temporada, cebolleta verde y alcachofas </p>
                        <p class="precio-special reveal-d1500">12€</p>
                    </div>
                </div>
                <div class="special bg-effect-img">
                <Image className="img-special" src={special6} alt='Fatteh de Garbanzos' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Fatteh de Garbanzos</h3>
                        <p class="descripcion-special reveal-d1300">Yogur griego garbanzos y pan plano libanés con salsa tahini</p>
                        <p class="precio-special reveal-d1500">16€</p>
                    </div>
                </div>
                <div class="special bg-effect-img">
                <Image className="img-special" src={special3} alt='Veggie burger' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Veggie burger</h3>
                        <p class="descripcion-special reveal-d1300">Hamburguesa de berenjenas con remolacha y crema de tomate</p>
                        <p class="precio-special reveal-d1500">14€</p>
                    </div>
                </div>
                <div class="special bg-effect-img">
                <Image className="img-special" src={special5} alt='Vichyssoise' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Vichyssoise</h3>
                        <p class="descripcion-special reveal-d1300">Crema de puerros con higos y frutas cítricas </p>
                        <p class="precio-special reveal-d1500">11€</p>
                    </div>
                </div>
                <div class="special bg-effect-img">
                <Image className="img-special" src={special4} alt='Macedonia' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Macedonia</h3>
                        <p class="descripcion-special reveal-d1300">Mix de frutos exóticos con yogur de granada</p>
                        <p class="precio-special reveal-d1500">13€</p>
                    </div>
                </div>
                <div class="special bg-effect-img">
                <Image className="img-special" src={special2} alt='Porridge de platano' width={320} height={180}  objectFit="cover" quality={100}  />
                    <div class="texto-special bg-effect-txt">
                        <h3 class="titulo-special reveal-d800">Porridge de plátano</h3>
                        <p class="descripcion-special reveal-d1300">Copos de avena con plátano, vainilla y semillas de chía</p>
                        <p class="precio-special reveal-d1500">9€</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Specials;