import Link             from 'next/link';

import './index.scss';

export default function Navbar() {

    return(
       <nav className="navbar">
        <ul className="navbar-list">
          <li className="list-item">
            <Link className="item" href="/">Home</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/about" >About Us</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/menu">Menu</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/contact-us">Contact Us</Link>
          </li>
        </ul>
       </nav>
    )
}