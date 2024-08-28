'use client'
import {motion} from "framer-motion";
import Image from "next/image";
import signature from '@/static/media/img/signature.png'
import './page.scss';
export default function Menu(){
  return (
    <div className="menu-design">
      <motion.div className="chef-box"
       variants={{
        hidden:{opacity:0, y:200},
        visible:{opacity:1,y:0},          
      }     
    }
      transition={{delay:0.25, duration:0.75}}
      initial="hidden"
      animate="visible">
        <div className="text">
          <p className="chef-title">Chef</p>
          <p className="chef-name">Jean-Michel Monroe</p>
          <div className="signature">
            <Image className="img" src={signature} width={180} height={90}  objectFit="contain" quality={100}/>
          </div>
        </div>
      </motion.div>
    </div>
  ) 
}