'use client'
import { useSelector }      from 'react-redux';
import {motion} from "framer-motion";
import { useTranslations } from "next-intl";
import './index.scss';
import { useEffect } from 'react';
const Hero = () => {
    const t = useTranslations("Hero");
    const isMobile = useSelector(state => state.responsive.isMobile);

    useEffect(() => {
        console.log(isMobile)
    },[isMobile])
    return(
        <div className="hero-section">
            <motion.div className="main-container"
            variants={isMobile?{
                hidden:{opacity:0, x:0},
                visible:{opacity:1,x:0} ,          
              }:{
                hidden:{opacity:0, x:275},
                visible:{opacity:1,x:100},   
              }
              
            }
              transition={{delay:0.25, duration:0.75}}
              initial="hidden"
              animate="visible">
                <h1>Veggie Bites</h1>
                <motion.p
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1,y:0},          
                  }}
                  transition={{delay:1, duration:0.75}}
                  initial="hidden"
                  animate="visible"
                >{t('slogan')}</motion.p>
            </motion.div>
        </div>
    )
}

export default Hero