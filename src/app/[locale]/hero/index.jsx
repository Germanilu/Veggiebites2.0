'use client'
import {motion} from "framer-motion";
import './index.scss';
const Hero = () => {

    return(
        <div className="hero-section">
            <motion.div className="main-container"
            variants={{
                hidden:{opacity:0, x:275},
                visible:{opacity:1,x:100},          
              }}
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
                >Tu Comida Saludable</motion.p>
            </motion.div>
        </div>
    )
}

export default Hero