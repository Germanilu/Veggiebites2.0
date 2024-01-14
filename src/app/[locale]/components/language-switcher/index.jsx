import { useTranslations }  from "next-intl";
import Link                 from "next-intl/link";

export default function LanguageSwitcher() {

  return(
    <div className="language-switcher-design">
       <Link href="/" locale="en">
          EN
        </Link>{" "}
        |{" "}
        <Link href="/" locale="es">
          ES
        </Link>
    </div>
  )
}