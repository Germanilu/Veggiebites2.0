import './page.scss'
import Link from 'next/link'
export default function Home({ params: { lng } }) {
  // https://locize.com/blog/next-app-dir-i18n/
  return (
    <div className='home-design'>
      <div className="hero-section">
        <h1 className='hero-title'>TITULO</h1>
      </div>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/about`}>
        second page
      </Link>
      <div className="first-section">
        <h2>FIRST SECTION</h2>
      </div>
      <div className="second-section">
        <h2>SECOND SECTION</h2>
      </div>
    </div>
  )
}
