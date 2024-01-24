'use client'

import './index.scss';

export default function ScrollToTop() {

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div onClick={topFunction} className="scroll-to-top">Back to top</div>
  )
}