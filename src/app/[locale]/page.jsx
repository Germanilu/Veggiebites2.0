import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import Hero from "./components/hero";
import Specials from "./components/specials";
import AboutUs from "./components/about-us";
import './page.scss';

export const metadata = {
  title:"Home title",
  description:"home metadata description"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <Hero/>
      <Specials id="special"/>
      <AboutUs/>
      <Map />
      <ScrollToTop />
    </div>
  )
}

