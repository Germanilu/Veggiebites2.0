import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../i18n/settings'
import { useTranslation } from '../../../i18n'

export const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'footer');
  
  return (
    <>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </>
  )
}