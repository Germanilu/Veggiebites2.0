'use client'

import {useRouter,usePathname} from '@/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  return(
    <div className="language-switcher-design">
       <div onClick={() => router.replace(pathname, { locale: "en" })}>
          EN
        </div>
        <div onClick={() => router.replace(pathname, { locale: "es" })}>
          ES
        </div>
    </div>
  )
}